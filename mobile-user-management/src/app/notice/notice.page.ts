import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
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
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewNotice(){
    this.router.navigate(['/notice-view']);
  }

}
