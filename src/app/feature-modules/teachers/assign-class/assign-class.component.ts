import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from 'src/app/services/toaster.service';
import {ModalComponent} from '../../../components/modal/modal.component';
import {TeacherListResponseDTO} from '../../../api/models/teacher-list-response-dto';
import {TeachersService} from '../../../api/services/teachers.service';
import {SubjectsService} from '../../../api/services/subjects.service';
import {ClassListResponseDTO, DefaultListResponseDTO} from 'src/app/api/models';
import {ClassesService} from '../../../api/services/classes.service';

@Component({
  selector: 'app-assign-class',
  templateUrl: './assign-class.component.html',
  styleUrls: ['./assign-class.component.sass']
})
export class AssignClassComponent implements OnInit {

  item: TeacherListResponseDTO;
  editForm: FormGroup;
  subjects: DefaultListResponseDTO[];
  classes: ClassListResponseDTO[];

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private toasterService: ToasterService,
    private modalService: BsModalService,
    private teachersService: TeachersService,
    private subjectsService: SubjectsService,
    private classesService: ClassesService,
  ) {
  }

  get teacherId() {
    return this.editForm.get('teacherId');
  }

  get language() {
    return this.editForm.get('language');
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      teacherId: this.item.id,
      subjectId: ['', Validators.required],
      classId: ['', Validators.required],
      year: ['', Validators.required]
    });
    const params: SubjectsService.ListGradesParams = {
      startPosition: null,
      maxResult: null,
    };
    this.subjectsService.listGrades(params).subscribe(
      result => {
        this.subjects = result;
      }
    );

    const paramss: ClassesService.ClassesListParams = {
      startPosition: null,
      maxResult: null,
    };
    this.classesService.classesList(paramss).subscribe(
      result => {
        this.classes = result;
      }
    );
  }

  edit() {
    if (this.editForm.valid) {
      this.teachersService.assignTeachers(this.editForm.value).subscribe(
        result => {
          if (result.status) {
            this.toasterService.opensuccessToaster(result.message, 'Update successful');
            this.bsModalRef.hide();
          } else {
            this.openModal('failure', 'Update not successful');
          }
        }
      );
    }
  }

  openModal(title: string, message: string) {
    const initialState = {
      title,
      message,
    };
    this.modalService.show(ModalComponent, {initialState});
  }

}
