import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {ProgramsService} from '../../../api/services/programs.service';
import {AddProgramComponent} from '../add-program/add-program.component';
import {ProgramsResponseDTO} from '../../../api/models/programs-response-dto';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.sass']
})
export class ProgramsListComponent implements OnInit {
  proList: ProgramsResponseDTO[];



  constructor(
    private programsService: ProgramsService,
    private modalService: BsModalService,
  ) {
  }

  ngOnInit() {
    const params: ProgramsService.ListProgramsParams = {
      startPosition: null,
      maxResult: null
    };
    this.programsService.listPrograms(params).subscribe(
      result => {
        this.proList = result;
      }
    );
  }

  addPrograms() {
    this.modalService.show(AddProgramComponent);
  }
}
