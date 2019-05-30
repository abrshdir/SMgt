import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StudRoutingModule } from './stud-routing.module';
import { RegisterComponent } from './register/register.component';
import { StudHomeComponent } from './stud-home/stud-home.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { ListByclassComponent } from './list-byclass/list-byclass.component';

@NgModule({
  declarations: [RegisterComponent, StudHomeComponent, StudListComponent, AssignClassComponent, ListByclassComponent],
  imports: [
    CommonModule,
    StudRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class StudModule { }
