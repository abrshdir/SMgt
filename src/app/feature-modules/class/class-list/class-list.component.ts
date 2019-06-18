import {Component, OnInit} from '@angular/core';
import {ClassesService} from 'src/app/api/services';
import {ClassListResponseDTO} from 'src/app/api/models';
import {BsModalService} from 'ngx-bootstrap';
import {AddClassComponent} from '../add-class/add-class.component';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.sass']
})
export class ClassListComponent implements OnInit {
  classList: ClassListResponseDTO[];

  constructor(
    private classesService: ClassesService,
    private modalService: BsModalService,
  ) {
  }

  ngOnInit() {
    const params: ClassesService.ClassesListParams = {
      startPosition: null,
      maxResult: null
    };
    this.classesService.classesList(params).subscribe(
      result => {
        this.classList = result;
      }
    );
  }

  registerStu() {
    this.modalService.show(AddClassComponent);
    this.modalService.onHide.subscribe(
      result => {
        this.ngOnInit();
      }
    );
  }

}
