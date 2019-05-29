import {Component, OnInit} from '@angular/core';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  message: string;

  constructor(
    private toastService: ToastrManager) {
  }

  ngOnInit() {
  }
}
