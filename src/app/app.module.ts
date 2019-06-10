import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './feature-modules/page-not-found-component/page-not-found-component.component';
import { UnAthorizedPageComponent } from './feature-modules/un-athorized-page/un-athorized-page.component';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor } from './authentication/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ng6-toastr-notifications';
import { ToastComponent } from './components/toast/toast.component';
import { DataTablesModule } from 'angular-datatables';
import { HomepageComponent } from './feature-modules/homepage/homepage.component';
import {ModalComponent} from 'src/app/components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    UnAthorizedPageComponent,
    ToastComponent,
    HomepageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    DataTablesModule.forRoot(),
  ],

  entryComponents: [
    ModalComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
