import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassHomeComponent } from './class-home/class-home.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassListByTeacherComponent } from './class-list-by-teacher/class-list-by-teacher.component';

@NgModule({
  declarations: [ClassHomeComponent, ClassListComponent, AddClassComponent, ClassListByTeacherComponent],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
