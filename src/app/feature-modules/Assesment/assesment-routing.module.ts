import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssesHomeComponent } from './asses-home/asses-home.component';
import { AddAssesComponent } from './add-asses/add-asses.component';
import { AddAssesTypeComponent } from './add-asses-type/add-asses-type.component';
import { AssesTypeListComponent } from './asses-type-list/asses-type-list.component';
import { ListAssesmentComponent } from './list-assesment/list-assesment.component';
import { ListByClandTeachComponent } from './list-by-cland-teach/list-by-cland-teach.component';

const routes: Routes = [
  {
    path: '',
    component: AssesHomeComponent,
    children: [
      {path: 'addAssesment', component: AddAssesComponent},
      {path: 'addAssesmentType', component: AddAssesTypeComponent},
      {path: 'assesmentTypeList', component: AssesTypeListComponent},
      {path: 'assesmentList', component: ListAssesmentComponent},
      {path: 'listByClassAndTeacher', component: ListByClandTeachComponent},
      {path: '', redirectTo: 'assesmentList', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssesmentRoutingModule { }
