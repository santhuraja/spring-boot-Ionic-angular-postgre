import { Component} from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})

export class MessagePage {

public labelAttribute:string;
  
public objects:any[];

messageForm : FormGroup;

constructor(public formBuilder: FormBuilder,
               public navCtrl 		: NavController,
               public actionSheetController: ActionSheetController) 
   {
      this.messageForm = formBuilder.group({
         "to"            : ["", Validators.required],
         "name"            : ["", Validators.required],
         "message"       : ["", Validators.required]
      });

      const objects = [ ]
   }

   protected filter(keyword) {
      keyword = keyword.toLowerCase();
  
      return this.objects.filter(
        (object) => {
          const value = object[this.labelAttribute].toLowerCase();
  
          return value.includes(keyword);
        }
      );
    }
  
}