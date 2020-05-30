import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {
  marks = [
    {
      subject: 'Math',
      mark: 80,
      grade: 'A',
      commnet: 'Very good'
    },
    {
      subject: 'Yellow Belt',
      mark: 93,
      grade: 'A+',
      commnet: 'Excellent'
    },
    {
      subject: 'Science',
      mark: 85,
      grade: 'A',
      commnet: 'Very good'
    },
    {
      subject: 'English',
      mark: 87,
      grade: 'A',
      commnet: 'Very good'
    },
    {
      subject: 'Advnace Technology',
      mark: 75,
      grade: 'A-',
      commnet: 'Greate'
    },
    {
      subject: 'Sanskrit',
      mark: 80,
      grade: 'A',
      commnet: 'Very good'
    },
    {
      subject: 'Computer',
      mark: 90,
      grade: 'A',
      commnet: 'Excellent'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
