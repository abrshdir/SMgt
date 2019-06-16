import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByClandTeachComponent } from './list-by-cland-teach.component';

describe('ListByClandTeachComponent', () => {
  let component: ListByClandTeachComponent;
  let fixture: ComponentFixture<ListByClandTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListByClandTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByClandTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
