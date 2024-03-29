/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://172.16.0.224:7171/SchoolManagement/rest';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
