import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { AddProgramComponent } from './add-program/add-program.component';
import {SharedModule} from '../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {BsDropdownModule} from 'ngx-bootstrap';
import {UiSwitchModule} from 'ngx-ui-switch';
import { ProgramHomeComponent } from './program-home/program-home.component';

@NgModule({
  declarations: [ProgramsListComponent, AddProgramComponent, ProgramHomeComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot(),
    UiSwitchModule
  ]
})
export class ProgramsModule { }
