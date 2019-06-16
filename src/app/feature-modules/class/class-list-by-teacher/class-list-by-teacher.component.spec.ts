import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListByTeacherComponent } from './class-list-by-teacher.component';

describe('ClassListByTeacherComponent', () => {
  let component: ClassListByTeacherComponent;
  let fixture: ComponentFixture<ClassListByTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListByTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
