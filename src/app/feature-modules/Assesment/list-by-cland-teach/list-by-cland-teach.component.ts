import { Component, OnInit } from '@angular/core';
import {AssesmentsService} from '../../../api/services/assesments.service';
import {AssesmentsResponseDTO} from '../../../api/models/assesments-response-dto';

@Component({
  selector: 'app-list-by-cland-teach',
  templateUrl: './list-by-cland-teach.component.html',
  styleUrls: ['./list-by-cland-teach.component.sass']
})
export class ListByClandTeachComponent implements OnInit {
  assesList: AssesmentsResponseDTO[];

  constructor(
    private assesmentsService: AssesmentsService,
  ) { }

  ngOnInit() {
    const params: AssesmentsService.ListAssesmentByClassParams= {
      startPosition: null,
      maxResult: null
    };
    this.assesmentsService.listAssesmentByClass(params).subscribe(
      result => {
        this.assesList = result;
      }
    );
  }

}
