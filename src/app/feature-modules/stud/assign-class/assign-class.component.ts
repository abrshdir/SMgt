import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToasterService} from '../../../services/toaster.service';
import {ModalComponent} from '../../../components/modal/modal.component';
import {StudentsService} from '../../../api/services/students.service';
import {StudentListResponseDTO} from '../../../api/models/student-list-response-dto';
import {ClassesService} from '../../../api/services/classes.service';
import {ClassListResponseDTO} from '../../../api/models/class-list-response-dto';

@Component({
  selector: 'app-assign-class',
  templateUrl: './assign-class.component.html',
  styleUrls: ['./assign-class.component.sass']
})
export class AssignClassComponent implements OnInit {

  item: StudentListResponseDTO;
  editForm: FormGroup;
  classes: ClassListResponseDTO[];

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private studentsService: StudentsService,
    private classesService: ClassesService,
  ) {
  }

  get classId() {
    return this.editForm.get('classId');
  }

  get studentId() {
    return this.editForm.get('studentId');
  }

  ngOnInit() {
    const paramss: ClassesService.ClassesListParams = {
      startPosition: null,
      maxResult: null,
    };
    this.classesService.classesList(paramss).subscribe(
      result => {
        this.classes = result;
      }
    );

    this.editForm = this.formBuilder.group({
      classId: ['', Validators.required],
      studentId: this.item.id,
    });
  }

  openModal(title: string, message: string) {
    const initialState = {
      title,
      message,
    };
    this.bsModalService.show(ModalComponent, {initialState});
  }

  edit() {
    this.studentsService.assignStudents(this.editForm.value).subscribe(
      result => {
        if (result.status) {
          this.toasterService.opensuccessToaster(result.message, 'Success');
          this.bsModalRef.hide();
        } else {
          this.openModal('Failure', result.message);
        }
      }
    );
  }

}
