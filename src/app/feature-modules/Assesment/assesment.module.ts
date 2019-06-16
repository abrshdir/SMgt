import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssesmentRoutingModule } from './assesment-routing.module';
import { AssesHomeComponent } from './asses-home/asses-home.component';
import { AddAssesComponent } from './add-asses/add-asses.component';
import { ListByClandTeachComponent } from './list-by-cland-teach/list-by-cland-teach.component';
import { ListAssesmentComponent } from './list-assesment/list-assesment.component';
import { AddAssesTypeComponent } from './add-asses-type/add-asses-type.component';
import { AssesTypeListComponent } from './asses-type-list/asses-type-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { BsDropdownModule } from 'ngx-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [AssesHomeComponent, AddAssesComponent, ListByClandTeachComponent, ListAssesmentComponent, AddAssesTypeComponent, AssesTypeListComponent],
  imports: [
    CommonModule,
    AssesmentRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot(),
    UiSwitchModule
  ]
})
export class AssesmentModule { }
