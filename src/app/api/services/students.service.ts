/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StudentListResponseDTO } from '../models/student-list-response-dto';
import { ResponseDTO } from '../models/response-dto';
import { StudentClassAssociationDTO } from '../models/student-class-association-dto';
import { StudentRegistrationRequestDTO } from '../models/student-registration-request-dto';
@Injectable({
  providedIn: 'root',
})
class StudentsService extends __BaseService {
  static readonly listByClassPath = '/student/listByClass';
  static readonly listregisteredStudentsPath = '/student/list';
  static readonly assignStudentsPath = '/student/assignClass';
  static readonly registerStudentsPath = '/student/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists already Registered Students
   * @param classId undefined
   * @return successful operation
   */
  listByClassResponse(classId?: number): __Observable<__StrictHttpResponse<Array<StudentListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (classId != null) __params = __params.set('classId', classId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/student/listByClass`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StudentListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already Registered Students
   * @param classId undefined
   * @return successful operation
   */
  listByClass(classId?: number): __Observable<Array<StudentListResponseDTO>> {
    return this.listByClassResponse(classId).pipe(
      __map(_r => _r.body as Array<StudentListResponseDTO>)
    );
  }

  /**
   * Lists already Registered Students
   * @param params The `StudentsService.ListregisteredStudentsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listregisteredStudentsResponse(params: StudentsService.ListregisteredStudentsParams): __Observable<__StrictHttpResponse<Array<StudentListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/student/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StudentListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already Registered Students
   * @param params The `StudentsService.ListregisteredStudentsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listregisteredStudents(params: StudentsService.ListregisteredStudentsParams): __Observable<Array<StudentListResponseDTO>> {
    return this.listregisteredStudentsResponse(params).pipe(
      __map(_r => _r.body as Array<StudentListResponseDTO>)
    );
  }

  /**
   * Assign Students for classes
   * @param body undefined
   * @return successful operation
   */
  assignStudentsResponse(body?: StudentClassAssociationDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/student/assignClass`,
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
   * Assign Students for classes
   * @param body undefined
   * @return successful operation
   */
  assignStudents(body?: StudentClassAssociationDTO): __Observable<ResponseDTO> {
    return this.assignStudentsResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Register Students
   * @param body undefined
   * @return successful operation
   */
  registerStudentsResponse(body?: StudentRegistrationRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/student/register`,
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
  registerStudents(body?: StudentRegistrationRequestDTO): __Observable<ResponseDTO> {
    return this.registerStudentsResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }
}

module StudentsService {

  /**
   * Parameters for listregisteredStudents
   */
  export interface ListregisteredStudentsParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { StudentsService }
