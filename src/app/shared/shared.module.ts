import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxModuleModule } from './ngx-module.module';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {FooterComponent} from '../components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  exports : [HeaderComponent, FormsModule, ReactiveFormsModule, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxModuleModule,
  ]
})
export class SharedModule { }
