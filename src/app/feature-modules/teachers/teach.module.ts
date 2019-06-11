import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachRoutingModule } from './teach-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ListComponent } from './list/list.component';
import { TeachHomeComponent } from './teach-home/teach-home.component';
import { RegTeachComponent } from './reg-teach/reg-teach.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import {ListByClassComponent} from './list-by-class/list-by-class.component';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { AssignedTeachersComponent } from './assigned-teachers/assigned-teachers.component';

@NgModule({
  declarations: [ListComponent, TeachHomeComponent, RegTeachComponent, ListByClassComponent, AssignClassComponent, AssignedTeachersComponent],
  imports: [
    CommonModule,
    TeachRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot(),
    UiSwitchModule
  ]
})
export class TeachModule { }
