import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToasterService} from '../../../services/toaster.service';
import {ModalComponent} from '../../../components/modal/modal.component';
import {ProgramsService} from '../../../api/services/programs.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.sass']
})
export class AddProgramComponent implements OnInit {

  register: FormGroup;

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private programsService: ProgramsService,
  ) {
  }

  get name() {
    return this.register.get('name');
  }

  get descriptioin() {
    return this.register.get('descriptioin');
  }

  get startDate() {
    return this.register.get('startDate');
  }

  get endDate() {
    return this.register.get('endDate');
  }

  ngOnInit() {
    this.register = this.formBuilder.group({
      name: '',
      descriptioin: '',
      startDate: '',
      endDate: '',
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
    this.programsService.registerProgram(this.register.value).subscribe(
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
}
