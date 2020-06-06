import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoutePage } from './addroute.page';

describe('AddRoutePage', () => {
  let component: AddRoutePage;
  let fixture: ComponentFixture<AddRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
