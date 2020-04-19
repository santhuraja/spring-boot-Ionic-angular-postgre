import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  exams = [
    {
      title: 'First Semester',
      class: 'One (A)',
      subject: 'English',
      room: '101',
      time: '11:00 AM - 1:00 PM',
      date: '01 Apr 2019'
    },
    {
      title: 'First Semester',
      class: 'One (A)',
      subject: 'English',
      room: '101',
      time: '11:00 AM - 1:00 PM',
      date: '01 Apr 2019'
    },
    {
      title: 'First Semester',
      class: 'One (A)',
      subject: 'English',
      room: '101',
      time: '11:00 AM - 1:00 PM',
      date: '01 Apr 2019'
    },
    {
      title: 'First Semester',
      class: 'One (A)',
      subject: 'English',
      room: '101',
      time: '11:00 AM - 1:00 PM',
      date: '01 Apr 2019'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
