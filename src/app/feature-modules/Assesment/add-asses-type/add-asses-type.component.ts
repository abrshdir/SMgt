import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AssesmentsService } from 'src/app/api/services';
import { ToasterService } from 'src/app/services/toaster.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-add-asses-type',
  templateUrl: './add-asses-type.component.html',
  styleUrls: ['./add-asses-type.component.sass']
})
export class AddAssesTypeComponent implements OnInit {

  register: FormGroup;
  
  get name() {
    return this.register.get('name');
  }

  get description() {
    return this.register.get('description');
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
      description: '',
      name: '',
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
    this.assesmentsService.registerAssesmentTypes(this.register.value).subscribe(
      result => {
        if (result.status) {
          this.toasterService.opensuccessToaster(result.message, 'successfully inserted')
          this.bsModalRef.hide();
          this.ngOnInit();
        } else {
          this.openModal('Failure', result.message);
        }
      }
    );
  }
}
