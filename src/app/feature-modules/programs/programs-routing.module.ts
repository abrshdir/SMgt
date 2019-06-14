import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgramHomeComponent} from './program-home/program-home.component';
import {ProgramsListComponent} from './programs-list/programs-list.component';
import {AddProgramComponent} from './add-program/add-program.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramHomeComponent,
    children: [
      {path: 'programList', component: ProgramsListComponent},
      {path: 'addProgram', component: AddProgramComponent},
      {path: '', redirectTo: 'programList', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
