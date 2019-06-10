import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegTeachComponent } from './reg-teach/reg-teach.component';
import { TeachHomeComponent } from './teach-home/teach-home.component';
import {ListByClassComponent} from './list-by-class/list-by-class.component';
import {AssignClassComponent} from './assign-class/assign-class.component';

const routes: Routes = [
  {
    path: '',
    component: TeachHomeComponent,
    children: [
      {path: 'assign', component: AssignClassComponent},
      {path: 'teachList', component: ListComponent},
      {path: 'regTeach', component: RegTeachComponent},
      {path: 'listByClass', component: ListByClassComponent},
      {path: '', redirectTo: 'teachList', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachRoutingModule { }
