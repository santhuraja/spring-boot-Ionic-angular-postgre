import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from '../services/school/student.search.service';
//import { AuthService } from '../services/auth.service';
import {School} from '../model/school';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MenuController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-studentsearch',
  templateUrl: 'studentsearch.page.html',
  styleUrls: ['studentsearch.page.scss'],
})
export class StudentSearchPage implements OnInit {
  currentUser: User;
  school: School = new School();
  errorMessage: string;
  loader: any;
  isDismiss = false;

  constructor(
    //private authService: AuthService,
    private studentSearchService: StudentSearchService, private router: Router,
    private menuController: MenuController, private loadingCtrl: LoadingController) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  
    ngOnInit() {
      this.menuController.enable(true);
    }
  
    addSchool(){
      this.presentLoading();
      this.studentSearchService.addSchool(this.school).subscribe(data=> {
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