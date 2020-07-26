import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NotificationService } from '../services/school/notification.service';
import { Notification } from '../model/notification';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  notices: Array<Notification>;

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private menuController: MenuController) { }

  ngOnInit() {
    this.menuController.enable(true);
    this.findActiveNotifications();
  }

  findActiveNotifications() {
    this.notificationService.findActiveNotifications().subscribe(data => {
      this.notices = data;
    });
  }

  viewNotice(notice) {
    let navParam: NavigationExtras = {
      queryParams: {
        notice: JSON.stringify(notice)
      }
    }
    this.router.navigate(['/notice-view'], navParam);
  }

  /*
  notices = [
    {
      title: 'First Samester Exam',
      notice: 'Your first semester exam will held on 15-04-2019.',
      date: '01 apr 2019'
    },
    {
      title: 'Second Samester Exam',
      notice: 'Your second semester exam will held on 02 may 2019.',
      date: '02 may 2019'
    },
    {
      title: 'Annual Sport Day',
      notice: 'Your annual sport day will held on 20 may 2019.',
      date: '20 may 2019'
    },
    {
      title: 'Third Semster Exam',
      notice: 'Your third semester exam will held on 15 march 2019.',
      date: '15 march 2019'
    }
  ]
  */

}
