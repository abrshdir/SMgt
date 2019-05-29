/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseDTO } from '../models/response-dto';
import { DefaultRequestDTO } from '../models/default-request-dto';
import { DefaultListResponseDTO } from '../models/default-list-response-dto';
@Injectable({
  providedIn: 'root',
})
class SectionsService extends __BaseService {
  static readonly registerStudentsPath = '/sections/add';
  static readonly listGradesPath = '/sections/list';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerStudentsResponse(body?: DefaultRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sections/add`,
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
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerStudents(body?: DefaultRequestDTO): __Observable<ResponseDTO> {
    return this.registerStudentsResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already registered Grades
   * @param params The `SectionsService.ListGradesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listGradesResponse(params: SectionsService.ListGradesParams): __Observable<__StrictHttpResponse<Array<DefaultListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sections/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DefaultListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already registered Grades
   * @param params The `SectionsService.ListGradesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listGrades(params: SectionsService.ListGradesParams): __Observable<Array<DefaultListResponseDTO>> {
    return this.listGradesResponse(params).pipe(
      __map(_r => _r.body as Array<DefaultListResponseDTO>)
    );
  }
}

module SectionsService {

  /**
   * Parameters for listGrades
   */
  export interface ListGradesParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { SectionsService }