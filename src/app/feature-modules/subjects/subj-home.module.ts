import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjHomeRoutingModule } from './subj-home-routing.module';
import {SubjectsAddComponent} from './subjects-add/subjects-add.component';
import {SubjectsListComponent} from './subjects-list/subjects-list.component';
import {SubjHomeComponent} from './subj-home/subj-home.component';
import {SharedModule} from '../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {BsDropdownModule} from 'ngx-bootstrap';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
  declarations: [SubjHomeComponent, SubjectsListComponent, SubjectsAddComponent],
  imports: [
    CommonModule,
    SubjHomeRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot(),
    UiSwitchModule
  ]
})
export class SubjHomeModule { }
