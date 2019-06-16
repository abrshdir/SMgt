import { Component, OnInit } from '@angular/core';
import { AssesmentsService } from 'src/app/api/services';
import { BsModalService } from 'ngx-bootstrap';
import { DefaultListResponseDTO } from 'src/app/api/models';
import { AddAssesTypeComponent } from '../add-asses-type/add-asses-type.component';

@Component({
  selector: 'app-asses-type-list',
  templateUrl: './asses-type-list.component.html',
  styleUrls: ['./asses-type-list.component.sass']
})
export class AssesTypeListComponent implements OnInit {
  assesTypeList: DefaultListResponseDTO[];

  constructor(
    private assesmentsService: AssesmentsService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    const params: AssesmentsService.ListAssesmentTypesParams= {
      startPosition: null,
      maxResult: null
    }
    this.assesmentsService.listAssesmentTypes(params).subscribe(
      result => {
        this.assesTypeList = result;
      }
    );
  }

  registerStu() {
    this.modalService.show(AddAssesTypeComponent);
  }


}
