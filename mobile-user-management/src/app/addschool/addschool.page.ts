import { Component, OnInit } from '@angular/core';
import { AddSchoolService } from '../services/school/add.school.service';
import { AuthService } from '../services/auth.service';
import {School} from '../model/school';
import {User} from '../model/user';
import {Router} from '@angular/router';
import { Validators, FormBuilder, FormGroup,FormControl  } from '@angular/forms';
import {MenuController, LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-addschool',
  templateUrl: 'addschool.page.html',
  styleUrls: ['addschool.page.scss'],
})
export class AddSchoolPage implements OnInit {
  currentUser: User;
  school: School = new School();
  errorMessage: string;
  loader: any;
  isDismiss = false;
  schoolForm : FormGroup;
  defaultDate = "1987-06-30";


  constructor(private authService: AuthService,private addSchoolService: AddSchoolService, private router: Router,
    private menuController: MenuController, private loadingCtrl: LoadingController, private toastController: ToastController,
    public formBuilder: FormBuilder) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      this.schoolForm = formBuilder.group({
        name:  new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
        id  :  new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
        logo:  new FormControl(),
        website:new FormControl(),
        activeTerm:new FormControl(),
        passoutClass:new FormControl(),
        enableLicense:new FormControl(),
        domain:new FormControl(),
        state:new FormControl(),
        country:new FormControl(),
        alternatePhone:new FormControl(),
        address:new FormControl(),
        theme:new FormControl(),
        backgroundImage:new FormControl(),
        city:  new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),  
        phone: new FormControl('',Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')])),      
        email: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])),
        activeAcademicSession:new FormControl(this.defaultDate,Validators.compose([Validators.required]))
        });
        
    }

    get errorControl() {
      return this.schoolForm.controls;
    }

    ngOnInit() {
      this.menuController.enable(true);
    }
  
    addSchool(){
      if (this.schoolForm.valid) {
        this.errorMessage = '';
        this.presentLoading();
        this.addSchoolService.addSchool(this.school).subscribe(data=> {
          this.successMessage();
          this.dismiss();
          //this.router.navigate(['/dashboard']);
        },err => {
          this.errorMessage = "Schoolname already exist";
          this.dismiss();
        });
      } else {
         console.log(this.schoolForm.value)
         return false;
      }
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
    async successMessage() {
      const toast = await this.toastController.create({
        message: 'School saved successfully',
        position: 'top',
        cssClass: 'toast-success',
        color:"success",
        duration: 3000
      });
      toast.present();
    }
    async dismiss() {
      this.isDismiss = true;
      if(!this.loader){
        return;
      }
    return await this.loader.dismiss().then(() => console.log('dismissed'));
    }
  

}