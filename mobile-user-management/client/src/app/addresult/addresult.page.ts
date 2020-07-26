import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/school/results.service';
//import { AuthService } from '../services/auth.service';
import {Result} from '../model/result';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MenuController, LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-addresult',
  templateUrl: 'addresult.page.html',
  styleUrls: ['addresult.page.scss'],
})
export class AddResultPage implements OnInit {
  currentUser: User;
  result: Result = new Result();
  errorMessage: string;
  loader: any;
  isDismiss = false;

  constructor(
    //private authService: AuthService,
    private resultService: ResultsService, private router: Router,
    private menuController: MenuController, private loadingCtrl: LoadingController,private toastController: ToastController) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  
    ngOnInit() {
      this.menuController.enable(true);
    }
  
    addResult(){
      this.presentLoading();
        this.resultService.addResult(this.result).subscribe(data=> {
          this.successMessage();
          this.dismiss();
          this.router.navigate(['/dashboard']);
        },HttpResponse => {
          this.errorMessage = HttpResponse.error.message;
          this.dismiss();
        });
    }
    async successMessage() {
      const toast = await this.toastController.create({
        message: 'Result saved successfully',
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