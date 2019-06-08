/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseDTO } from '../models/response-dto';
import { ClassesRequestDTO } from '../models/classes-request-dto';
import { ClassListResponseDTO } from '../models/class-list-response-dto';
@Injectable({
  providedIn: 'root',
})
class ClassesService extends __BaseService {
  static readonly registerClassPath = '/classes/add';
  static readonly classesListPath = '/classes/list';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Register Classes
   * @param body undefined
   * @return successful operation
   */
  registerClassResponse(body?: ClassesRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/classes/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseDTO>;
      })
    );
  }
  /**
   * Register Classes
   * @param body undefined
   * @return successful operation
   */
  registerClass(body?: ClassesRequestDTO): __Observable<ResponseDTO> {
    return this.registerClassResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already registered Grades
   * @param params The `ClassesService.ClassesListParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  classesListResponse(params: ClassesService.ClassesListParams): __Observable<__StrictHttpResponse<Array<ClassListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/classes/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClassListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already registered Grades
   * @param params The `ClassesService.ClassesListParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  classesList(params: ClassesService.ClassesListParams): __Observable<Array<ClassListResponseDTO>> {
    return this.classesListResponse(params).pipe(
      __map(_r => _r.body as Array<ClassListResponseDTO>)
    );
  }
}

module ClassesService {

  /**
   * Parameters for classesList
   */
  export interface ClassesListParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { ClassesService }
