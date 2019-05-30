import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/api/services';
import { StudentListResponseDTO } from 'src/app/api/models';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.sass']
})
export class StudListComponent implements OnInit {
  studList: StudentListResponseDTO[];

  constructor(
    private studentService: StudentsService,
  ) { }

  ngOnInit() {
    const params: StudentsService.ListregisteredStudentsParams={
      startPosition: null,
      maxResult: null
    }
    this.studentService.listregisteredStudents(params).subscribe(
      result=>{
        this.studList = result;
      }
    )
  }

}
