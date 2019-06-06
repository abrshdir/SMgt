import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachRoutingModule } from './teach-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {BsDropdownModule} from 'ngx-bootstrap';
import { ListComponent } from './list/list.component';
import { TeachHomeComponent } from './teach-home/teach-home.component';

@NgModule({
  declarations: [ListComponent, TeachHomeComponent],
  imports: [
    CommonModule,
    TeachRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class TeachModule { }
