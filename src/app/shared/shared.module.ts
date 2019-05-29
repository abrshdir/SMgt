import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxModuleModule } from './ngx-module.module';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  exports : [HeaderComponent, FormsModule, ReactiveFormsModule, SidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ModalModule,
    NgxModuleModule,
    ModalModule.forRoot(),
  ]
})
export class SharedModule { }
