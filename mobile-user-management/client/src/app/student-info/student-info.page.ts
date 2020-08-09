import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {
  segmentVal: any = 'personal';

  studentInfo : Student;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private menu: MenuController) {
       this.studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
    }

  ngOnInit() {
    this.menu.enable(true);
  }

  segmentChanged( eve ){
    this.segmentVal = eve.target.value;
    if(this.segmentVal == 'transport'){
      this.router.navigate(['/transport']);
    }
  }

}
