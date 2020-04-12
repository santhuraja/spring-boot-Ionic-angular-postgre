import { Component, OnInit } from '@angular/core';
import { SchoolSettingsService } from '../services/school/school.settings.service';
import { AuthService } from '../services/auth.service';
import {School} from '../model/school';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MenuController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-schoolsettings',
  templateUrl: 'schoolsettings.page.html',
  styleUrls: ['schoolsettings.page.scss'],
})
export class SchoolSettingsPage implements OnInit {
  currentUser: User;
  school: School = new School();
  errorMessage: string;
  loader: any;
  isDismiss = false;

  constructor(private authService: AuthService,private schoolSettingsService: SchoolSettingsService, private router: Router,
    private menuController: MenuController, private loadingCtrl: LoadingController) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  
  
    ngOnInit() {
      this.menuController.enable(true);
      this.findSchool();
    }
    findSchool() {
        this.schoolSettingsService.findSchool().subscribe(data => {
        this.school = data;
      });
    }
  
    addSchool(){
      this.presentLoading();
      this.schoolSettingsService.addSchool(this.school).subscribe(data=> {
        this.dismiss();
        //this.router.navigate(['/dashboard']);
      },err => {
        this.errorMessage = "Schoolname already exist";
        this.dismiss();
      });
    }
  
    async presentLoading() {
      this.loader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      await this.loader.present().then(()=> {
        if(this.isDismiss){
          this.loader.dismiss();
        }
      });
    }
  
    async dismiss() {
      this.isDismiss = true;
      if(!this.loader){
        return;
      }
    return await this.loader.dismiss().then(() => console.log('dismissed'));
    }
  

}