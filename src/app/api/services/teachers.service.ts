/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseDTO } from '../models/response-dto';
import { TeacherRequestDTO } from '../models/teacher-request-dto';
import { TeacherAssignmentDTO } from '../models/teacher-assignment-dto';
import { TeacherAssignmentResponseDTO } from '../models/teacher-assignment-response-dto';
import { TeacherListResponseDTO } from '../models/teacher-list-response-dto';
@Injectable({
  providedIn: 'root',
})
class TeachersService extends __BaseService {
  static readonly registerStudentsPath = '/teacher/register';
  static readonly assignTeachersPath = '/teacher/assignClassAndSubject';
  static readonly teacherAssignmentListPath = '/teacher/teacherAssignmentList';
  static readonly listregisteredTeachersPath = '/teacher/list';
  static readonly listByClassPath = '/teacher/listByClass';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Register Teachers
   * @param body undefined
   * @return successful operation
   */
  registerStudentsResponse(body?: TeacherRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/teacher/register`,
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
   * Register Teachers
   * @param body undefined
   * @return successful operation
   */
  registerStudents(body?: TeacherRequestDTO): __Observable<ResponseDTO> {
    return this.registerStudentsResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Assign Teachers for classes and Subjects
   * @param body undefined
   * @return successful operation
   */
  assignTeachersResponse(body?: TeacherAssignmentDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/teacher/assignClassAndSubject`,
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
   * Assign Teachers for classes and Subjects
   * @param body undefined
   * @return successful operation
   */
  assignTeachers(body?: TeacherAssignmentDTO): __Observable<ResponseDTO> {
    return this.assignTeachersResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists already Registered Students
   * @param params The `TeachersService.TeacherAssignmentListParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  teacherAssignmentListResponse(params: TeachersService.TeacherAssignmentListParams): __Observable<__StrictHttpResponse<Array<TeacherAssignmentResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/teacher/teacherAssignmentList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TeacherAssignmentResponseDTO>>;
      })
    );
  }
  /**
   * Lists already Registered Students
   * @param params The `TeachersService.TeacherAssignmentListParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  teacherAssignmentList(params: TeachersService.TeacherAssignmentListParams): __Observable<Array<TeacherAssignmentResponseDTO>> {
    return this.teacherAssignmentListResponse(params).pipe(
      __map(_r => _r.body as Array<TeacherAssignmentResponseDTO>)
    );
  }

  /**
   * Lists already Registered Teachers
   * @param params The `TeachersService.ListregisteredTeachersParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listregisteredTeachersResponse(params: TeachersService.ListregisteredTeachersParams): __Observable<__StrictHttpResponse<Array<TeacherListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/teacher/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TeacherListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already Registered Teachers
   * @param params The `TeachersService.ListregisteredTeachersParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listregisteredTeachers(params: TeachersService.ListregisteredTeachersParams): __Observable<Array<TeacherListResponseDTO>> {
    return this.listregisteredTeachersResponse(params).pipe(
      __map(_r => _r.body as Array<TeacherListResponseDTO>)
    );
  }

  /**
   * Lists already Registered Teachers by class
   * @param classId undefined
   * @return successful operation
   */
  listByClassResponse(classId?: number): __Observable<__StrictHttpResponse<Array<TeacherListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (classId != null) __params = __params.set('classId', classId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/teacher/listByClass`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TeacherListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already Registered Teachers by class
   * @param classId undefined
   * @return successful operation
   */
  listByClass(classId?: number): __Observable<Array<TeacherListResponseDTO>> {
    return this.listByClassResponse(classId).pipe(
      __map(_r => _r.body as Array<TeacherListResponseDTO>)
    );
  }
}

module TeachersService {

  /**
   * Parameters for teacherAssignmentList
   */
  export interface TeacherAssignmentListParams {
    startPosition?: number;
    maxResult?: number;
  }

  /**
   * Parameters for listregisteredTeachers
   */
  export interface ListregisteredTeachersParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { TeachersService }
