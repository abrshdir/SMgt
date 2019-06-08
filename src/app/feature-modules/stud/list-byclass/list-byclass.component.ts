import {Component, OnInit} from '@angular/core';
import {ClassesService, StudentsService} from 'src/app/api/services';
import {ClassListResponseDTO, StudentListResponseDTO} from 'src/app/api/models';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-byclass',
  templateUrl: './list-byclass.component.html',
  styleUrls: ['./list-byclass.component.sass']
})
export class ListByclassComponent implements OnInit {
  classIdList: StudentListResponseDTO[];
  insertCId: FormGroup;
  Classes: ClassListResponseDTO[];
  classID: any;

  constructor(
    private studentService: StudentsService,
    private formBuilder: FormBuilder,
    private classesService: ClassesService
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
    )
  }

  assign() {
    if (this.insertCId.valid) {
      this.studentService.listByClass(this.insertCId.value.classId).subscribe(
        result => {
          this.classIdList = result;
        }
      )
    }
  }

}
