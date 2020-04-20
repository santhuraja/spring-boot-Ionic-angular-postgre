import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeViewPage } from './notice-view.page';

describe('NoticeViewPage', () => {
  let component: NoticeViewPage;
  let fixture: ComponentFixture<NoticeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
