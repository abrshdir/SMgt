import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentsService} from '../../../api/services/students.service';
import {ToasterService} from '../../../services/toaster.service';
import {ModalComponent} from 'src/app/components/modal/modal.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  statusNum: number;

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private toasterService: ToasterService
  ) {
  }

  get status() {
    return this.register.get('status');
  }

  get firstName() {
    return this.register.get('firstName');
  }

  get middleName() {
    return this.register.get('middleName');
  }

  get lastName() {
    return this.register.get('lastName');
  }

  get studentId() {
    return this.register.get('studentId');
  }


  ngOnInit() {

    this.register = this.formBuilder.group({
      status: '',
      firstName: '',
      middleName: '',
      lastName: '',
      studentId: '',
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
    this.register.patchValue({status: this.statusNum});
    this.studentsService.registerStudents(this.register.value).subscribe(
      result => {
        if (result.status) {
          this.toasterService.opensuccessToaster(result.message, 'successfully inserted')
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
