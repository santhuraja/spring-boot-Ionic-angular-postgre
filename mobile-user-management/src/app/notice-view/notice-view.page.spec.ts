import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticeViewPage } from './notice-view.page';

describe('NoticeViewPage', () => {
  let component: NoticeViewPage;
  let fixture: ComponentFixture<NoticeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
