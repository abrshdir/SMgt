import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './feature-modules/page-not-found-component/page-not-found-component.component';
import { UnAthorizedPageComponent } from './feature-modules/un-athorized-page/un-athorized-page.component';
import {HomepageComponent} from './feature-modules/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
  path: 'stud',
  loadChildren: 'src/app/feature-modules/stud/stud.module#StudModule',
  /*  canLoad: [AuthGuard],
   data: { role: 'ALL' } */
  },
  {
    path: 'teach',
    loadChildren: 'src/app/feature-modules/teachers/teach.module#TeachModule',
    /*  canLoad: [AuthGuard],
     data: { role: 'ALL' } */
    },
  {
    path: 'subjects',
    loadChildren: 'src/app/feature-modules/subjects/subj-home.module#SubjHomeModule',
    /*  canLoad: [AuthGuard],
     data: { role: 'ALL' } */
  },
  {
    path: 'programs',
    loadChildren: 'src/app/feature-modules/programs/programs.module#ProgramsModule',
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
