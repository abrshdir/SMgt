import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { TeachersService } from 'src/app/api/services';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-reg-teach',
  templateUrl: './reg-teach.component.html',
  styleUrls: ['./reg-teach.component.sass']
})
export class RegTeachComponent implements OnInit {

  register: FormGroup;
  statusNum: number;

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private teachersService: TeachersService,
  ) { }



  get firstName() {
    return this.register.get('firstName');
  }

  get middleName() {
    return this.register.get('middleName');
  }

  get lastName() {
    return this.register.get('lastName');
  }

  get phoneNumber() {
    return this.register.get('phoneNumber');
  }
  get phoneNumber2() {
    return this.register.get('phoneNumber2');
  }
  get email() {
    return this.register.get('email');
  }

  get qualification() {
    return this.register.get('qualification');
  }
  get statusId() {
    return this.register.get('statusId');
  }
  get statusName() {
    return this.register.get('statusName');
  }


  ngOnInit() {
    this.register = this.formBuilder.group({
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNumber: '',
      phoneNumber2: '',
      email: '',
      qualification: '',
      statusId: '',
      statusName: ''
    });
  }
  openModal(title: string, message: string) {
    const initialState = {
      title,
      message,
    };
    this.bsModalService.show(ModalComponent, {initialState});
  }
  registerNow() {
    this.register.patchValue({statusId: this.statusNum});
    this.teachersService.registerStudents(this.register.value).subscribe(
      result => {
        if (result.status) {
          this.toasterService.opensuccessToaster(result.message, 'successfully inserted');
          this.bsModalRef.hide();
        } else {
          this.openModal('Failure', result.message);
        }
      }
    );
  }

  activate($event) {
    if ($event) {
      this.statusNum = 1;
    } else {
      this.statusNum = 0;
    }
  }
}
