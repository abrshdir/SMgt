/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseDTO } from '../models/response-dto';
import { SchoolFeeRequestDTO } from '../models/school-fee-request-dto';
import { DefaultListResponseDTO } from '../models/default-list-response-dto';
import { DefaultRequestDTO } from '../models/default-request-dto';
import { SchoolFeeResponseDTO } from '../models/school-fee-response-dto';
@Injectable({
  providedIn: 'root',
})
class SchoolFeeService extends __BaseService {
  static readonly registerSchoolFeePath = '/schoolFees/addSchoolFee';
  static readonly listFeeTypesPath = '/schoolFees/feeTypeList';
  static readonly registerFeeTypesPath = '/schoolFees/addFeeType';
  static readonly listSchoolFeesPath = '/schoolFees/SchoolFeeList';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Register School Fee
   * @param body undefined
   * @return successful operation
   */
  registerSchoolFeeResponse(body?: SchoolFeeRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/schoolFees/addSchoolFee`,
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
   * Register School Fee
   * @param body undefined
   * @return successful operation
   */
  registerSchoolFee(body?: SchoolFeeRequestDTO): __Observable<ResponseDTO> {
    return this.registerSchoolFeeResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already registered Fee Types
   * @param params The `SchoolFeeService.ListFeeTypesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listFeeTypesResponse(params: SchoolFeeService.ListFeeTypesParams): __Observable<__StrictHttpResponse<Array<DefaultListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/schoolFees/feeTypeList`,
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
   * Lists already registered Fee Types
   * @param params The `SchoolFeeService.ListFeeTypesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listFeeTypes(params: SchoolFeeService.ListFeeTypesParams): __Observable<Array<DefaultListResponseDTO>> {
    return this.listFeeTypesResponse(params).pipe(
      __map(_r => _r.body as Array<DefaultListResponseDTO>)
    );
  }

  /**
   * Register School Fees
   * @param body undefined
   * @return successful operation
   */
  registerFeeTypesResponse(body?: DefaultRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/schoolFees/addFeeType`,
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
   * Register School Fees
   * @param body undefined
   * @return successful operation
   */
  registerFeeTypes(body?: DefaultRequestDTO): __Observable<ResponseDTO> {
    return this.registerFeeTypesResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already registered SchoolFees
   * @param params The `SchoolFeeService.ListSchoolFeesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listSchoolFeesResponse(params: SchoolFeeService.ListSchoolFeesParams): __Observable<__StrictHttpResponse<Array<SchoolFeeResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/schoolFees/SchoolFeeList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SchoolFeeResponseDTO>>;
      })
    );
  }
  /**
   * Lists already registered SchoolFees
   * @param params The `SchoolFeeService.ListSchoolFeesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listSchoolFees(params: SchoolFeeService.ListSchoolFeesParams): __Observable<Array<SchoolFeeResponseDTO>> {
    return this.listSchoolFeesResponse(params).pipe(
      __map(_r => _r.body as Array<SchoolFeeResponseDTO>)
    );
  }
}

module SchoolFeeService {

  /**
   * Parameters for listFeeTypes
   */
  export interface ListFeeTypesParams {
    startPosition?: number;
    maxResult?: number;
  }

  /**
   * Parameters for listSchoolFees
   */
  export interface ListSchoolFeesParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { SchoolFeeService }
