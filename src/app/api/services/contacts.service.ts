/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactListResponseDTO } from '../models/contact-list-response-dto';
import { ResponseDTO } from '../models/response-dto';
import { ContactRequestDTO } from '../models/contact-request-dto';
@Injectable({
  providedIn: 'root',
})
class ContactsService extends __BaseService {
  static readonly listByStudentPath = '/contacts/listByStudent';
  static readonly registerContactsPath = '/contacts/register';
  static readonly AssociateContactsPath = '/contacts/associate';
  static readonly listregisteredContactsPath = '/contacts/list';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists already Registered Contacts by student id
   * @param studentId undefined
   * @return successful operation
   */
  listByStudentResponse(studentId?: number): __Observable<__StrictHttpResponse<Array<ContactListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (studentId != null) __params = __params.set('studentId', studentId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts/listByStudent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactListResponseDTO>>;
      })
    );
  }
  /**
   * Lists already Registered Contacts by student id
   * @param studentId undefined
   * @return successful operation
   */
  listByStudent(studentId?: number): __Observable<Array<ContactListResponseDTO>> {
    return this.listByStudentResponse(studentId).pipe(
      __map(_r => _r.body as Array<ContactListResponseDTO>)
    );
  }

  /**
   * Register Contacts
   * @param body undefined
   * @return successful operation
   */
  registerContactsResponse(body?: ContactRequestDTO): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/contacts/register`,
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
   * Register Contacts
   * @param body undefined
   * @return successful operation
   */
  registerContacts(body?: ContactRequestDTO): __Observable<ResponseDTO> {
    return this.registerContactsResponse(body).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Associates Registered Contacts to students
   * @param params The `ContactsService.AssociateContactsParams` containing the following parameters:
   *
   * - `StudentId`:
   *
   * - `StatusId`:
   *
   * - `ContactId`:
   *
   * @return successful operation
   */
  AssociateContactsResponse(params: ContactsService.AssociateContactsParams): __Observable<__StrictHttpResponse<ResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.StudentId != null) __params = __params.set('StudentId', params.StudentId.toString());
    if (params.StatusId != null) __params = __params.set('StatusId', params.StatusId.toString());
    if (params.ContactId != null) __params = __params.set('ContactId', params.ContactId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts/associate`,
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
   * Associates Registered Contacts to students
   * @param params The `ContactsService.AssociateContactsParams` containing the following parameters:
   *
   * - `StudentId`:
   *
   * - `StatusId`:
   *
   * - `ContactId`:
   *
   * @return successful operation
   */
  AssociateContacts(params: ContactsService.AssociateContactsParams): __Observable<ResponseDTO> {
    return this.AssociateContactsResponse(params).pipe(
      __map(_r => _r.body as ResponseDTO)
    );
  }

  /**
   * Lists All already Registered Contacts
   * @param params The `ContactsService.ListregisteredContactsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listregisteredContactsResponse(params: ContactsService.ListregisteredContactsParams): __Observable<__StrictHttpResponse<Array<ContactListResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.maxResult != null) __params = __params.set('maxResult', params.maxResult.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactListResponseDTO>>;
      })
    );
  }
  /**
   * Lists All already Registered Contacts
   * @param params The `ContactsService.ListregisteredContactsParams` containing the following parameters:
   *
   * - `startPosition`:
   *
   * - `maxResult`:
   *
   * @return successful operation
   */
  listregisteredContacts(params: ContactsService.ListregisteredContactsParams): __Observable<Array<ContactListResponseDTO>> {
    return this.listregisteredContactsResponse(params).pipe(
      __map(_r => _r.body as Array<ContactListResponseDTO>)
    );
  }
}

module ContactsService {

  /**
   * Parameters for AssociateContacts
   */
  export interface AssociateContactsParams {
    StudentId?: number;
    StatusId?: number;
    ContactId?: number;
  }

  /**
   * Parameters for listregisteredContacts
   */
  export interface ListregisteredContactsParams {
    startPosition?: number;
    maxResult?: number;
  }
}

export { ContactsService }
