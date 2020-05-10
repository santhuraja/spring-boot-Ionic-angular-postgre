import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  currentUser: User;

  appPages=[
    {
      title: 'Add School',
      url: '/addschool',
      icon: 'school'
    },
    {
      title: 'Add Student',
      url: '/addstudent',
      icon: 'person-add'
    },
    {
      title: 'School Settings',
      url: '/schoolsettings',
      icon: 'settings'
    },
    {
      title: 'Event',
      url: '/event',
      icon: 'globe'
    },
    {
      title: 'Attendance Sheet',
      url: '/attendance',
      icon: 'calendar'
    },
    {
      title: 'Marks',
      url: '/marks',
      icon: 'document'
    },
    {
      title: 'Exam Dates',
      url: '/exam',
      icon: 'paper'
    },
    {
      title: 'Fees',
      url: '/fees',
      icon: 'copy',
      color: 'danger'
    },
    {
      title: 'Routine',
      url: '/routine',
      icon: 'alarm'
    },
    {
      title: 'Exam Result',
      url: '/exam-result',
      icon: 'book'
    },
    {
      title: 'Student',
      url: '/student',
      icon: 'people'
    },
    {
      title: 'Downloads',
      url: '/download',
      icon: 'download'
    },
    {
      title: 'Notice',
      url: '/notice',
      icon: 'notifications'
    },
    {
      title: 'Class Timetable',
      url: '/class-timetable',
      icon: 'calendar'
    },
    {
      title: 'Syllabus',
      url: '/syllabus',
      icon: 'book'
    }
  ]

  constructor(private authService: AuthService, private router: Router,
  private menu: MenuController) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.menu.enable(true);
  }

  logOut(){
    this.authService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    },err => {

    });
  }

}