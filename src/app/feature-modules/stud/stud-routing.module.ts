import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudHomeComponent } from './stud-home/stud-home.component';
import { RegisterComponent } from './register/register.component';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { ListByclassComponent } from './list-byclass/list-byclass.component';

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
export class StudRoutingModule { }
