import { Component} from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { StudentService } from '../services/school/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})

export class MessagePage {

studentList: Array<Student>;

messageForm : FormGroup;

constructor(public formBuilder: FormBuilder,
               public navCtrl 		: NavController,
               public actionSheetController: ActionSheetController,
               private studentService: StudentService) 
   {
      this.messageForm = formBuilder.group({
         "to"            : ["", Validators.required],
         "name"            : ["", Validators.required],
         "message"       : ["", Validators.required]
      });

      this.findAllStudents();
   }

   findAllStudents(){
    this.studentService.findAllStudents().subscribe(data => {
      this.studentList = data;
    });
  }
  
}