import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToasterService} from '../../../services/toaster.service';
import {SubjectsService} from '../../../api/services/subjects.service';
import {ModalComponent} from '../../../components/modal/modal.component';

@Component({
  selector: 'app-subjects-add',
  templateUrl: './subjects-add.component.html',
  styleUrls: ['./subjects-add.component.sass']
})
export class SubjectsAddComponent implements OnInit {

  register: FormGroup;

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private subjectsService: SubjectsService,
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
      description: '',
    });
  }

  openModal(title: string, message: string) {
    const initialState = {
      title,
      message,
    };
    this.bsModalService.show(ModalComponent, {initialState});
  }

  addSubjects() {
    this.subjectsService.registerStudents(this.register.value).subscribe(
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
