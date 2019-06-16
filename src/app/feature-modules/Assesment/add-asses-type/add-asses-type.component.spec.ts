import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssesTypeComponent } from './add-asses-type.component';

describe('AddAssesTypeComponent', () => {
  let component: AddAssesTypeComponent;
  let fixture: ComponentFixture<AddAssesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
