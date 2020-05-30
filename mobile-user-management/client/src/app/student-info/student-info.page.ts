import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {
  segmentVal: any = 'personal';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  segmentChanged( eve ){
    this.segmentVal = eve.target.value;
    if(this.segmentVal == 'transport'){
      this.router.navigate(['/transport']);
    }
  }

}
