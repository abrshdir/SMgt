import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/api/services';
import { StudentListResponseDTO } from 'src/app/api/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-byclass',
  templateUrl: './list-byclass.component.html',
  styleUrls: ['./list-byclass.component.sass']
})
export class ListByclassComponent implements OnInit {
  classIdList: StudentListResponseDTO[];
  insertCId: FormGroup;
  clasId: number;

  constructor(
    private studentService: StudentsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.insertCId = this.formBuilder.group({
      classId: ['', Validators.required],
    });
  }
  get classId() {
    return this.insertCId.get('classId');
  }

  insert(value: number) {
    if (this.insertCId.valid) {
      this.studentService.listByClass(this.insertCId.value).subscribe(
        result => {
          this.classIdList = result;
        }
      )
    }
  }

}
