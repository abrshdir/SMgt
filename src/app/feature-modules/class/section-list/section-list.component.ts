import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {SectionsService} from '../../../api/services/sections.service';
import {DefaultListResponseDTO} from '../../../api/models/default-list-response-dto';
import {AddSectionComponent} from '../add-section/add-section.component';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.sass']
})
export class SectionListComponent implements OnInit {
  sectionList: DefaultListResponseDTO[];

  constructor(
    private sectionsService: SectionsService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    const params: SectionsService.ListGradesParams = {
      startPosition: null,
      maxResult: null
    };
    this.sectionsService.listGrades(params).subscribe(
      result => {
        this.sectionList = result;
      }
    );
  }

  registerStu() {
    this.modalService.show(AddSectionComponent);
    this.modalService.onHide.subscribe(
      result => {
        this.ngOnInit();
      }
    );
  }


}
