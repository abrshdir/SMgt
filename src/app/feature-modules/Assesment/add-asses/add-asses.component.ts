import {Component, OnInit} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AssesmentsService, ProgramsService, TeachersService, SubjectsService, ClassesService} from 'src/app/api/services';
import {ToasterService} from 'src/app/services/toaster.service';
import {ModalComponent} from 'src/app/components/modal/modal.component';
import {DefaultListResponseDTO, ProgramsResponseDTO, TeacherListResponseDTO, ClassListResponseDTO} from 'src/app/api/models';

@Component({
  selector: 'app-add-asses',
  templateUrl: './add-asses.component.html',
  styleUrls: ['./add-asses.component.sass']
})
export class AddAssesComponent implements OnInit {

  register: FormGroup;
  assesTypeList: DefaultListResponseDTO[];
  proList: ProgramsResponseDTO[];
  listTeachers: TeacherListResponseDTO[];
  subjectsList: DefaultListResponseDTO[];
  classList: ClassListResponseDTO[];

  constructor(
    private bsModalService: BsModalService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private assesmentsService: AssesmentsService,
    private toasterService: ToasterService,
    private programsService: ProgramsService,
    private teachersService: TeachersService,
    private subjectsService: SubjectsService,
    private classesService: ClassesService,
  ) {
  }

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

  ngOnInit() {
    this.assesment();
    this.teachers();
    this.program();
    this.class();
    this.subject();
    this.class();

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

  assesment() {
    const params: AssesmentsService.ListAssesmentTypesParams = {
      startPosition: null,
      maxResult: null
    };
    this.assesmentsService.listAssesmentTypes(params).subscribe(
      result => {
        this.assesTypeList = result;
      }
    );
  }

  teachers() {
    const paramsss: TeachersService.ListregisteredTeachersParams = {
      startPosition: null,
      maxResult: null
    };
    this.teachersService.listregisteredTeachers(paramsss).subscribe(
      result => {
        this.listTeachers = result;
      }
    );
  }

  class() {
    const params: ClassesService.ClassesListParams = {
      startPosition: null,
      maxResult: null
    };
    this.classesService.classesList(params).subscribe(
      result => {
        this.classList = result;
      }
    );
  }

  subject() {
    const params: SubjectsService.ListGradesParams = {
      startPosition: null,
      maxResult: null
    };
    this.subjectsService.listGrades(params).subscribe(
      result => {
        this.subjectsList = result;
      }
    );
  }

  program() {
    const paramss: ProgramsService.ListProgramsParams = {
      startPosition: null,
      maxResult: null
    };
    this.programsService.listPrograms(paramss).subscribe(
      result => {
        this.proList = result;
      }
    );
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
          this.toasterService.opensuccessToaster(result.message, 'successfully inserted');
          this.bsModalRef.hide();
        } else {
          this.openModal('Failure', result.message);
        }
      }
    );
  }


}
