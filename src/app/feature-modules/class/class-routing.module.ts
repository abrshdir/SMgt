import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddClassComponent} from './add-class/add-class.component';
import {ClassListComponent} from './class-list/class-list.component';
import {ClassListByTeacherComponent} from './class-list-by-teacher/class-list-by-teacher.component';
import {ClassHomeComponent} from './class-home/class-home.component';
import {AddSectionComponent} from './add-section/add-section.component';
import {SectionListComponent} from './section-list/section-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClassHomeComponent,
    children: [
      {path: 'addClass', component: AddClassComponent},
      {path: 'listClass', component: ClassListComponent},
      {path: 'listClassByTeacher', component: ClassListByTeacherComponent},
      {path: 'sectionList', component: SectionListComponent},
      {path: 'addSection', component: AddSectionComponent},
      {path: '', redirectTo: 'listClass', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
