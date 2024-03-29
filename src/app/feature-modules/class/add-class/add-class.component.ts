import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToasterService} from '../../../services/toaster.service';
import {ClassesService} from '../../../api/services/classes.service';
import {ModalComponent} from '../../../components/modal/modal.component';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.sass']
})
export class AddClassComponent implements OnInit {


  register: FormGroup;

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private classesService: ClassesService,
  ) {
  }

  get grade() {
    return this.register.get('grade');
  }

  get section() {
    return this.register.get('section');
  }

  get capacity() {
    return this.register.get('capacity');
  }

  get name() {
    return this.register.get('name');
  }

  get description() {
    return this.register.get('description');
  }

  ngOnInit() {
    this.register = this.formBuilder.group({
      grade: '',
      section: '',
      capacity: '',
      name: '',
      description: ''
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
    this.classesService.registerClass(this.register.value).subscribe(
      result => {
        if (result.status) {
          this.toasterService.opensuccessToaster(result.message, 'successfully inserted');
          this.bsModalRef.hide();
          this.ngOnInit();
        } else {
          this.openModal('Failure', result.message);
        }
      }
    );
  }
}
