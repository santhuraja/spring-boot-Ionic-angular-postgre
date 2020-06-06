import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  showSearch = false;
  students = [
    {
      name: 'Bob smoth',
      email: 'bob@smoth.com',
      class: 'Class 1',
      section: 'Section 1'
    },
    {
      name: 'john doe',
      email: 'john@doe.com',
      class: 'Class 2',
      section: 'Section 2'
    },
    {
      name: 'Bob smoth',
      email: 'bob@smoth.com',
      class: 'Class 1',
      section: 'Section 1'
    },
    {
      name: 'john doe',
      email: 'john@doe.com',
      class: 'Class 2',
      section: 'Section 2'
    }
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  } 

  goToInfo(){
    this.router.navigate(['/student-info']);
  }
}
