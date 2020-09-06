
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendancePage } from './addattendance.page';

describe('AddAttendancePage', () => {
  let component: AddAttendancePage;
  let fixture: ComponentFixture<AddAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttendancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
