import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesTypeListComponent } from './asses-type-list.component';

describe('AssesTypeListComponent', () => {
  let component: AssesTypeListComponent;
  let fixture: ComponentFixture<AssesTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
