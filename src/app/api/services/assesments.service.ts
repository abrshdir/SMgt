/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AssesmentsResponseDTO } from '../models/assesments-response-dto';
import { ResponseDTO } from '../models/response-dto';
import { DefaultRequestDTO } from '../models/default-request-dto';
import { DefaultListResponseDTO } from '../models/default-list-response-dto';
import { AssesmentRequestDTO } from '../models/assesment-request-dto';
@Injectable({
  providedIn: 'root',
})
class AssesmentsService extends __BaseService {
  static readonly listProgramsPath = '/assesments/AssesmentList';
  static readonly registerAssesmentTypesPath = '/assesments/addAssesmentType';
  static readonly listAssesmentTypesPath = '/assesments/assesmentTypeList';
  static readonly registerAssesmentPath = '/assesments/addAssesment';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists already registered Grades
   * @param params The `AssesmentsService.ListProgramsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listProgramsResponse(params: AssesmentsService.ListProgramsParams): __Observable<__StrictHttpResponse<Array<AssesmentsResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assesments/AssesmentList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AssesmentsResponseDTO>>;
      })
    );
  }
  /**
   * Lists already registered Grades
   * @param params The `AssesmentsService.ListProgramsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listPrograms(params: AssesmentsService.ListProgramsParams): __Observable<Array<AssesmentsResponseDTO>> {
    return this.listProgramsResponse(params).pipe(
      __map(_r => _r.body as Array<AssesmentsResponseDTO>)
    );
  }

  /**
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerAssesmentTypesResponse(body?: DefaultRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/assesments/addAssesmentType`,
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
  registerAssesmentTypes(body?: DefaultRequestDTO): __Observable<ResponseDTO> {
    return this.registerAssesmentTypesResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already registered Grades
   * @param params The `AssesmentsService.ListAssesmentTypesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listAssesmentTypesResponse(params: AssesmentsService.ListAssesmentTypesParams): __Observable<__StrictHttpResponse<Array<DefaultListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assesments/assesmentTypeList`,
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
   * @param params The `AssesmentsService.ListAssesmentTypesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listAssesmentTypes(params: AssesmentsService.ListAssesmentTypesParams): __Observable<Array<DefaultListResponseDTO>> {
    return this.listAssesmentTypesResponse(params).pipe(
      __map(_r => _r.body as Array<DefaultListResponseDTO>)
    );
  }

  /**
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerAssesmentResponse(body?: AssesmentRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/assesments/addAssesment`,
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
  registerAssesment(body?: AssesmentRequestDTO): __Observable<ResponseDTO> {
    return this.registerAssesmentResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }
}

module AssesmentsService {

  /**
   * Parameters for listPrograms
   */
  export interface ListProgramsParams {
    startPosition?: number;
    maxResult?: number;
  }

  /**
   * Parameters for listAssesmentTypes
   */
  export interface ListAssesmentTypesParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { AssesmentsService }
