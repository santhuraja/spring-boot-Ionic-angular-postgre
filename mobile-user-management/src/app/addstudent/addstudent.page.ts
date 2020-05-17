import { Component, OnInit } from '@angular/core';
import { AddStudentService } from '../services/school/add.student.service';
import { AuthService } from '../services/auth.service';
import {Student} from '../model/student';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MenuController, LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-addstudent',
  templateUrl: 'addstudent.page.html',
  styleUrls: ['addstudent.page.scss'],
})
export class AddStudentPage implements OnInit {
  currentUser: User;
  student: Student = new Student();
  errorMessage: string;
  loader: any;
  isDismiss = false;

  constructor(private authService: AuthService,private addStudentService: AddStudentService, private router: Router,
    private menuController: MenuController, private loadingCtrl: LoadingController,private toastController: ToastController) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  
    ngOnInit() {
      this.menuController.enable(true);
    }
  
    addStudent(){
      this.presentLoading();
        this.addStudentService.addStudent(this.student).subscribe(data=> {
          this.successMessage();
          this.dismiss();
          //this.router.navigate(['/dashboard']);
        },HttpResponse => {
          this.errorMessage = HttpResponse.error.message;
          this.dismiss();
        });
    }
    async successMessage() {
      const toast = await this.toastController.create({
        message: 'Student saved successfully',
        position: 'top',
        cssClass: 'toast-success',
        color:"success",
        duration: 3000
      });
      toast.present();
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