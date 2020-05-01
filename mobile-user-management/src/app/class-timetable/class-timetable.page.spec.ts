import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassTimetablePage } from './class-timetable.page';

describe('ClassTimetablePage', () => {
  let component: ClassTimetablePage;
  let fixture: ComponentFixture<ClassTimetablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTimetablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
