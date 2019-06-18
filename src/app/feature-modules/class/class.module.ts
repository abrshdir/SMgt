import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassHomeComponent } from './class-home/class-home.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassListByTeacherComponent } from './class-list-by-teacher/class-list-by-teacher.component';
import {SharedModule} from '../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {BsDropdownModule} from 'ngx-bootstrap';
import {UiSwitchModule} from 'ngx-ui-switch';
import { SectionListComponent } from './section-list/section-list.component';
import { AddSectionComponent } from './add-section/add-section.component';

@NgModule({
  declarations: [ClassHomeComponent, ClassListComponent, AddClassComponent, ClassListByTeacherComponent, SectionListComponent, AddSectionComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    SharedModule,
    DataTablesModule.forRoot(),
    BsDropdownModule.forRoot(),
    UiSwitchModule
  ]
})
export class ClassModule { }
