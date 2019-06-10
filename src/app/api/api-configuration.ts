/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://196.188.193.2:7171/SchoolManagement/rest';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
