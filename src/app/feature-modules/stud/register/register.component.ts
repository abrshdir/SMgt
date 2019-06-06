import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentsService} from '../../../api/services/students.service';
import {ToasterService} from '../../../../../../BunaFrontEnd/src/app/services/toaster.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

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

  registerNow() {
    this.studentsService.registerStudents(this.register.value).subscribe(
      result => {
        if (result.status) {
          this.toasterService.opensuccessToaster(result.message, 'successfully inserted')
          this.bsModalRef.hide();
        }
      }
    );
  }
}
