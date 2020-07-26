import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResultPage } from './addresult.page';

describe('AddStudentPage', () => {
  let component: AddResultPage;
  let fixture: ComponentFixture<AddResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
