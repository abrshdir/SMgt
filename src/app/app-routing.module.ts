import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './feature-modules/page-not-found-component/page-not-found-component.component';
import { UnAthorizedPageComponent } from './feature-modules/un-athorized-page/un-athorized-page.component';

const routes: Routes = [
  {
  path: 'stud',
  loadChildren: 'src/app/feature-modules/stud/stud.module#StudModule',
  /*  canLoad: [AuthGuard],
   data: { role: 'ALL' } */
  },
  {
    path: '',
    redirectTo: 'stud',
    pathMatch: 'full'
  },
{ path: '**', component: PageNotFoundComponentComponent },
{ path: 'unauthorized', component: UnAthorizedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
