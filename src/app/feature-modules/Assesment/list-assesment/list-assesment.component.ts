import { Component, OnInit } from '@angular/core';
import { AssesmentsService } from 'src/app/api/services';
import { AssesmentsResponseDTO } from 'src/app/api/models';
import { BsModalService } from 'ngx-bootstrap';
import { AddAssesComponent } from '../add-asses/add-asses.component';

@Component({
  selector: 'app-list-assesment',
  templateUrl: './list-assesment.component.html',
  styleUrls: ['./list-assesment.component.sass']
})
export class ListAssesmentComponent implements OnInit {
  assesList: AssesmentsResponseDTO[];

  constructor(
    private assesmentsService: AssesmentsService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    const params: AssesmentsService.ListProgramsParams= {
      startPosition: null,
      maxResult: null
    };
    this.assesmentsService.listPrograms(params).subscribe(
      result => {
        this.assesList = result;
      }
    );
  }

  registerStu() {
    this.modalService.show(AddAssesComponent);
    this.modalService.onHide.subscribe(
      result => {
        this.ngOnInit();
      }
    );
  }

}
