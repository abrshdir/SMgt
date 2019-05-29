import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { EnterpriseMapOut } from '../models/payment-registration-list-out';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse } from '../../app/api/strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
//import { ExcelImports } from "../api/models/excel-imports";
import { BaseService as __BaseService } from '../../app/api/base-service';
@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    public returnedlist:any;
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

  /*   pushFileToStorage(file: File):  Observable<HttpEvent<Array<ExcelImports>>> {
        const formData = new FormData();
        formData.append('uploadedFile', file);
        //formData.append('header', header);
        const httpRequest = new HttpRequest('POST', 'http://196.188.28.222:7171/BunnaSMSV1/rest'+ '/file/uploadExcel', formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.httpClient.request(httpRequest);
    } */
    constructor(private httpClient: HttpClient) { }
 /*    pushFileToStorage(file: File, uploadName: string, uploadMessage: string): Observable<HttpEvent<ExcelImports[]>> {
        const formData = new FormData();
         
        formData.append('uploadedFile', file);
        formData.append('uploadName', uploadName);
        formData.append('uploadMessage', uploadMessage);
        const httpRequest = new HttpRequest('POST', 
        'http://192.168.10.220:8088/BunnaSMSV1/rest' + '/file/uploadExcel', 
        formData, 
        {
            reportProgress: true,
            responseType: 'json'
        });
        return this.httpClient.request(httpRequest);
    }
    getFiles(): Observable<any> {
        return this.httpClient.get('/downloadapi');
    } */


    returnedlistarr(info)
  {
    this.returnedlist=info;
  }
  
}
