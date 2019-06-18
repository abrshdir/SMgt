import {Component, OnInit} from '@angular/core';
import {ClassesService} from '../../../api/services/classes.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from '../../../services/toaster.service';
import {ModalComponent} from '../../../components/modal/modal.component';
import {TeachersService} from '../../../api/services/teachers.service';
import {TeacherListResponseDTO} from '../../../api/models/teacher-list-response-dto';
import {ClassListResponseDTO} from 'src/app/api/models';

@Component({
  selector: 'app-class-list-by-teacher',
  templateUrl: './class-list-by-teacher.component.html',
  styleUrls: ['./class-list-by-teacher.component.sass']
})
export class ClassListByTeacherComponent implements OnInit {

  register: FormGroup;
  listTeachers: TeacherListResponseDTO[];
  toSend: {};
  classList: ClassListResponseDTO[];

  constructor(
    private bsModalService: BsModalService,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private classesService: ClassesService,
    private teachersService: TeachersService,
  ) {
  }

  get teacherId() {
    return this.register.get('teacherId');
  }

  ngOnInit() {

    const params: TeachersService.ListregisteredTeachersParams = {
      startPosition: null,
      maxResult: null
    };
    this.teachersService.listregisteredTeachers(params).subscribe(
      result => {
        this.listTeachers = result;
      }
    );

    this.register = this.formBuilder.group({
      teacherId: ['', Validators.required],
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
    if (this.register.valid) {
      this.toSend = {
        teacherId: this.register.value.teacherId,
        startPosition: null,
        maxResult: null
      };
      this.classesService.classesListByTeacherId(this.toSend).subscribe(
        result => {
          this.classList = result;
        }
      );
    }
  }

}
