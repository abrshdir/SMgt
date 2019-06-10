import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/api/services';
import { TeacherListResponseDTO } from 'src/app/api/models';
import { BsModalService} from 'ngx-bootstrap/modal';
import { RegTeachComponent } from '../reg-teach/reg-teach.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  listTeachers: TeacherListResponseDTO[];

  constructor(
    private teachersService: TeachersService,
    private modalService : BsModalService
  ) { }

  ngOnInit() {
    const params: TeachersService.ListregisteredTeachersParams={
      startPosition: null,
      maxResult: null
    }
    this.teachersService.listregisteredTeachers(params).subscribe(
      result => {
        this.listTeachers = result
      }
    );
  }

  regTeach(){
    this.modalService.show(RegTeachComponent);
  }
}
