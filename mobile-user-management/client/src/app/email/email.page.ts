
import { Component} from '@angular/core';
import { Validators, FormBuilder, FormGroup,FormControl  } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import {EmailComposer} from "@ionic-native/email-composer/ngx";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})

export class EmailPage {

croppedImagepath = "";
isLoading = false;

imagePickerOptions = {
   maximumImagesCount: 1,
   quality: 50
};

emailForm : FormGroup;

constructor(public formBuilder: FormBuilder,
               public navCtrl 		: NavController,
               private _ALERT       : AlertController, 
               private _EMAIL       : EmailComposer,
               private camera: Camera,
               public actionSheetController: ActionSheetController,
               private file: File) 
   {
      this.emailForm = formBuilder.group({
         "to"            : ["", Validators.required],
         "cc"            : ["", Validators.required],
         "bcc"           : ["", Validators.required],
         "subject"       : ["", Validators.required],
         "message"       : ["", Validators.required]
      });
   }

   pickImage(sourceType) {
      const options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    }
  
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
        ]
      });
      await actionSheet.present();
    }

}