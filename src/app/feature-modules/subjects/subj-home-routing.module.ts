import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubjHomeComponent} from './subj-home/subj-home.component';
import {SubjectsListComponent} from './subjects-list/subjects-list.component';
import {SubjectsAddComponent} from './subjects-add/subjects-add.component';

const routes: Routes = [
  {
    path: '',
    component: SubjHomeComponent,
    children: [
      {path: 'subjectsList', component: SubjectsListComponent},
      {path: 'addSubjects', component: SubjectsAddComponent},
      {path: '', redirectTo: 'subjectsList', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjHomeRoutingModule { }
