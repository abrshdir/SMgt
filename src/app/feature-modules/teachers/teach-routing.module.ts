import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudHomeComponent} from "../stud/stud-home/stud-home.component";
import {StudListComponent} from "../stud/stud-list/stud-list.component";
import {ListByclassComponent} from "../stud/list-byclass/list-byclass.component";
import {AssignClassComponent} from "../stud/assign-class/assign-class.component";
import {RegisterComponent} from "../stud/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: StudHomeComponent,
    children: [
      {path: 'studList', component: StudListComponent},
      {path: 'listByClass', component: ListByclassComponent},
      {path: 'assignClass', component: AssignClassComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'studList', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachRoutingModule { }
