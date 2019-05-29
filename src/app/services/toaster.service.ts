import { Injectable } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    private toastrService: ToastrManager
  ) {
  }
  opensuccessToaster(message: string, title: string) {
    const initialState = {
      title: title,
      message: message,

    };
    this.toastrService.successToastr(initialState.message, initialState.title, ToastComponent)
  }
  openWarnToaser(message: string, title: string) {
    const initialState = {
      title: title,
      message: message,
    };
    this.toastrService.infoToastr(initialState.message, initialState.title, ToastComponent)
  }



}
