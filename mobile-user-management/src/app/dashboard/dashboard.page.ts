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