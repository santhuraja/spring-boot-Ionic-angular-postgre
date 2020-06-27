import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import { KeycloakProfile } from 'keycloak-js';
//import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  //userDetails: KeycloakProfile;
  

  appPages=[
    {
      title: 'Add School',
      url: '/addschool',
      icon: 'school'
    },
    {
      title: 'Students',
      url: '/student',
      icon: 'people'
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
      title: 'Events',
      url: '/event',
      icon: 'globe'
    },
    {
      title: 'Attendance Sheet',
      url: '/attendance',
      icon: 'calendar'
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
      title: 'Results',
      url: '/exam-result',
      icon: 'book'
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
    ,
    {
      title: 'Transport',
      url: '/transport',
      icon: 'bus'
    }
  ]


  constructor(
    //private keycloakService: KeycloakService, 
    //private authService: AuthService,
    private menu: MenuController) { }

  async ngOnInit() {
    this.menu.enable(true);
    // console.log("keyserv " + this.keycloakService)
    // if (await this.keycloakService.isLoggedIn()) {
    //   console.log("before " + this.userDetails)
    //   this.userDetails = await this.keycloakService.loadUserProfile();
    //   console.log("after " + this.userDetails)
    //   console.log("after " + this.userDetails.username)
    //   //this.isAdmin = this.authService.getRoles('admin');
    //   //this.isEmployee = this.authService.getRoles('employee');
    // }
  }

  

  // logOut(){
  //   this.authService.logOut().subscribe(data => {
  //     this.router.navigate(['/login']);
  //   },err => {

  //   });
  // }

}