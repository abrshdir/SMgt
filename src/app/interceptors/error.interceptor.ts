import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ModalComponent} from '../components/modal/modal.component';
import {BsModalService} from 'ngx-bootstrap/modal';

import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private modalService: BsModalService,
        private router : Router,
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(['/login']);      
            }else if (err.status === 403) {
                this.openModal('Notice',err.error.message || err.statusText); /// authentication related error
                this.authenticationService.logout();
                this.router.navigate(['/login']);      
            }
            else if(err.status === 404){
                this.openModal('Notice', 'The application is not able to connect to services. Check if you are connected to internet' );
            }
            else if(err.status >= 500 && err.status < 600){
                this.openModal('Notice', 'there is temporary problem,Contact your support group and Try again later');
            }
            else{
                const error = err.error.message || err.statusText;
                if(error == 'Unknown Error'){
                    this.openModal("Notice", 'Unknown error. Check if you are connected to the internet');
                }else{
                    this.openModal("Notice", 'there is temporary problem. try later');
                }    
            }
            return throwError(err.error.message || err.statusText);
        }))
    }

    openModal(title: string, message: string) {
        const initialState = {
          title: title,
          message: message
        };
        this.modalService.show(ModalComponent, {initialState});
      }
    

}
