import {Component, OnInit} from '@angular/core';
import {SubjectsService} from '../../../api/services/subjects.service';
import {BsModalService} from 'ngx-bootstrap';
import {DefaultListResponseDTO} from '../../../api/models/default-list-response-dto';
import {SubjectsAddComponent} from '../subjects-add/subjects-add.component';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.sass']
})
export class SubjectsListComponent implements OnInit {
  subjectsList: DefaultListResponseDTO[];

  constructor(
    private subjectsService: SubjectsService,
    private modalService: BsModalService,
  ) {
  }

  ngOnInit() {
    const params: SubjectsService.ListGradesParams = {
      startPosition: null,
      maxResult: null
    };
    this.subjectsService.listGrades(params).subscribe(
      result => {
        this.subjectsList = result;
      }
    );
  }

  addSubjects() {
    this.modalService.show(SubjectsAddComponent);
    this.modalService.onHide.subscribe(
      result => {
        this.ngOnInit();
      }
    );
  }

}
