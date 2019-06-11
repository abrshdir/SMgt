import {Component, OnInit} from '@angular/core';
import {TeachersService} from '../../../api/services/teachers.service';
import {BsModalService} from 'ngx-bootstrap';
import {TeacherAssignmentResponseDTO} from '../../../api/models/teacher-assignment-response-dto';

@Component({
  selector: 'app-assigned-teachers',
  templateUrl: './assigned-teachers.component.html',
  styleUrls: ['./assigned-teachers.component.sass']
})
export class AssignedTeachersComponent implements OnInit {
  listTeachers: TeacherAssignmentResponseDTO[];

  constructor(
    private teachersService: TeachersService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    const params: TeachersService.TeacherAssignmentListParams = {
      startPosition: null,
      maxResult: null
    };
    this.teachersService.teacherAssignmentList(params).subscribe(
      result => {
        this.listTeachers = result;
      }
    );
  }

}
