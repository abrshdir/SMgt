import {Component, OnInit} from '@angular/core';
import {ClassesService, StudentsService} from 'src/app/api/services';
import {ClassListResponseDTO, StudentListResponseDTO} from 'src/app/api/models';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AssignClassComponent} from '../assign-class/assign-class.component';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-list-byclass',
  templateUrl: './list-byclass.component.html',
  styleUrls: ['./list-byclass.component.sass']
})
export class ListByclassComponent implements OnInit {
  classIdList: StudentListResponseDTO[];
  insertCId: FormGroup;
  Classes: ClassListResponseDTO[];

  constructor(
    private studentService: StudentsService,
    private formBuilder: FormBuilder,
    private classesService: ClassesService,
    private  modalService: BsModalService
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
    }
    this.classesService.classesList(params).subscribe(
      result => {
        this.Classes = result;
      }
    );
  }

  submit() {
    if (this.insertCId.valid) {
      this.studentService.listByClass(this.insertCId.value.classId).subscribe(
        result => {
          this.classIdList = result;
        }
      );
    }
  }

  assign(i: number) {
    const initialState = {
      item: this.classIdList[i]
    };
    this.modalService.show(AssignClassComponent, {initialState});
    this.modalService.onHide.subscribe(
      result => {
        this.ngOnInit();
      }
    );
  }

}
