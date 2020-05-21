import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MenuController} from '@ionic/angular';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  userDetails: KeycloakProfile;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatbubbles'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'add-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keycloakService: KeycloakService,
    private menu: MenuController
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }
  async ngOnInit() {
    this.menu.enable(true);
    console.log("keyserv " + this.keycloakService)
    if (await this.keycloakService.isLoggedIn()) {
      console.log("before " + this.userDetails)
      this.userDetails = await this.keycloakService.loadUserProfile();
      console.log("after " + this.userDetails)
      console.log("after " + this.userDetails.username)
      //this.isAdmin = this.authService.getRoles('admin');
      //this.isEmployee = this.authService.getRoles('employee');
    }
  }
  async doLogout() {
    await this.keycloakService.logout();
  }
}
