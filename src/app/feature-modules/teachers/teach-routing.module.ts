import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegTeachComponent } from './reg-teach/reg-teach.component';
import { TeachHomeComponent } from './teach-home/teach-home.component';

const routes: Routes = [
  {
    path: '',
    component: TeachHomeComponent,
    children: [
      {path: 'teachList', component: ListComponent},
      {path: 'regTeach', component: RegTeachComponent},
      {path: '', redirectTo: 'teachList', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachRoutingModule { }
