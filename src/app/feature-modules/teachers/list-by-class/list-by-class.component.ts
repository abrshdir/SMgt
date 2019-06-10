import {Component, OnInit} from '@angular/core';
import {TeachersService} from '../../../api/services/teachers.service';
import {TeacherListResponseDTO} from '../../../api/models/teacher-list-response-dto';
import {ClassesService} from '../../../api/services/classes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClassListResponseDTO} from '../../../api/models/class-list-response-dto';
import {BsModalService} from 'ngx-bootstrap';
import {AssignClassComponent} from '../../teachers/assign-class/assign-class.component';

@Component({
  selector: 'app-list-by-class',
  templateUrl: './list-by-class.component.html',
  styleUrls: ['./list-by-class.component.sass']
})
export class ListByClassComponent implements OnInit {
  listTeachers: TeacherListResponseDTO[];
  insertCId: FormGroup;
  classes: ClassListResponseDTO[];

  constructor(
    private teachersService: TeachersService,
    private classesService: ClassesService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
  ) {
  }

  get classId() {
    return this.insertCId.get('classId');
  }

  ngOnInit() {
    this.insertCId = this.formBuilder.group({
      classId: '',
    });

    const params: ClassesService.ClassesListParams = {
      startPosition: null,
      maxResult: null,
    };
    this.classesService.classesList(params).subscribe(
      result => {
        this.classes = result;
      }
    );


  }

  list() {
    if (this.insertCId.valid) {
      this.teachersService.listByClass(this.insertCId.value.classId).subscribe(
        result => {
          this.listTeachers = result
        }
      );
    }
  }

  assign(i: number) {
    const initialState = {
      item: this.listTeachers[i]
    };
    this.modalService.show(AssignClassComponent, {initialState});
    this.modalService.onHide.subscribe(
      result => {
        this.ngOnInit();
      }
    );
  }
}
