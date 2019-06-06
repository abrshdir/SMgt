/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AssesmentsService } from './services/assesments.service';
import { ClassesService } from './services/classes.service';
import { ContactsService } from './services/contacts.service';
import { GradesService } from './services/grades.service';
import { ProgramsService } from './services/programs.service';
import { SectionsService } from './services/sections.service';
import { StatusesService } from './services/statuses.service';
import { StudentsService } from './services/students.service';
import { SubjectsService } from './services/subjects.service';
import { TeachersService } from './services/teachers.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AssesmentsService,
    ClassesService,
    ContactsService,
    GradesService,
    ProgramsService,
    SectionsService,
    StatusesService,
    StudentsService,
    SubjectsService,
    TeachersService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
