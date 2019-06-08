/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProgramsResponseDTO } from '../models/programs-response-dto';
import { ResponseDTO } from '../models/response-dto';
import { DefaultRequestDTO } from '../models/default-request-dto';
import { DefaultListResponseDTO } from '../models/default-list-response-dto';
import { ProgramRequestDTO } from '../models/program-request-dto';
@Injectable({
  providedIn: 'root',
})
class ProgramsService extends __BaseService {
  static readonly listProgramsPath = '/programs/ProgramList';
  static readonly registerProgramTypesPath = '/programs/addProgramType';
  static readonly listProgramTypesPath = '/programs/ProgramTypeList';
  static readonly registerProgramPath = '/programs/addProgram';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists already registered Grades
   * @param params The `ProgramsService.ListProgramsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listProgramsResponse(params: ProgramsService.ListProgramsParams): __Observable<__StrictHttpResponse<Array<ProgramsResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/programs/ProgramList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProgramsResponseDTO>>;
      })
    );
  }
  /**
   * Lists already registered Grades
   * @param params The `ProgramsService.ListProgramsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listPrograms(params: ProgramsService.ListProgramsParams): __Observable<Array<ProgramsResponseDTO>> {
    return this.listProgramsResponse(params).pipe(
      __map(_r => _r.body as Array<ProgramsResponseDTO>)
    );
  }

  /**
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerProgramTypesResponse(body?: DefaultRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/programs/addProgramType`,
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
  registerProgramTypes(body?: DefaultRequestDTO): __Observable<ResponseDTO> {
    return this.registerProgramTypesResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already registered Grades
   * @param params The `ProgramsService.ListProgramTypesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listProgramTypesResponse(params: ProgramsService.ListProgramTypesParams): __Observable<__StrictHttpResponse<Array<DefaultListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/programs/ProgramTypeList`,
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
   * @param params The `ProgramsService.ListProgramTypesParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listProgramTypes(params: ProgramsService.ListProgramTypesParams): __Observable<Array<DefaultListResponseDTO>> {
    return this.listProgramTypesResponse(params).pipe(
      __map(_r => _r.body as Array<DefaultListResponseDTO>)
    );
  }

  /**
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerProgramResponse(body?: ProgramRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/programs/addProgram`,
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
  registerProgram(body?: ProgramRequestDTO): __Observable<ResponseDTO> {
    return this.registerProgramResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }
}

module ProgramsService {

  /**
   * Parameters for listPrograms
   */
  export interface ListProgramsParams {
    startPosition?: number;
    maxResult?: number;
  }

  /**
   * Parameters for listProgramTypes
   */
  export interface ListProgramTypesParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { ProgramsService }
