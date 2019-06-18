import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToasterService} from '../../../services/toaster.service';
import {ModalComponent} from '../../../components/modal/modal.component';
import {SectionsService} from '../../../api/services/sections.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.sass']
})
export class AddSectionComponent implements OnInit {

  register: FormGroup;

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private sectionsService: SectionsService,
  ) {
  }

  get name() {
    return this.register.get('name');
  }

  get description() {
    return this.register.get('description');
  }

  ngOnInit() {

    this.register = this.formBuilder.group({
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
    this.sectionsService.registerStudents(this.register.value).subscribe(
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
