import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssesmentsService } from 'src/app/api/services';
import { ToasterService } from 'src/app/services/toaster.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-add-asses',
  templateUrl: './add-asses.component.html',
  styleUrls: ['./add-asses.component.sass']
})
export class AddAssesComponent implements OnInit {

  register: FormGroup;
  
  get name() {
    return this.register.get('name');
  }

  get assesmentTypeId() {
    return this.register.get('assesmentTypeId');
  }

  get programId() {
    return this.register.get('programId');
  }

  get teacherId() {
    return this.register.get('teacherId');
  }

  get classId() {
    return this.register.get('classId');
  }

  get subjectId() {
    return this.register.get('subjectId');
  }

  get givenDate() {
    return this.register.get('givenDate');
  }

  get submittedDate() {
    return this.register.get('submittedDate');
  }

  get weight() {
    return this.register.get('weight');
  }
  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private assesmentsService: AssesmentsService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.register = this.formBuilder.group({
      assesmentTypeId: '',
      name: '',
      programId: '',
      teacherId: '',
      classId: '',
      subjectId: '',
      givenDate: '',
      submittedDate: '',
      weight: ''
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
    this.assesmentsService.registerAssesment(this.register.value).subscribe(
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
  

}
