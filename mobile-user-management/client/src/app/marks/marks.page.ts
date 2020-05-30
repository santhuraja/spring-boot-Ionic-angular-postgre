import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './marks.page.html',
  styleUrls: ['./marks.page.scss'],
})
export class MarksPage implements OnInit {
  markSheet = [
    {
      semester: 'First Semester',
      data: [
        {
          subject: 'Bangla',
          ob_mark: 88,
          hi_mark: 98,
          mark: 88,
          point: 5.00,
          grade: 'A+'
        },{
          subject: 'Math',
          ob_mark: 88,
          hi_mark: 98,
          mark: 88,
          point: 5.00,
          grade: 'A+'
        },{
          subject: 'English',
          ob_mark: 88,
          hi_mark: 98,
          mark: 88,
          point: 5.00,
          grade: 'A+'
        }
      ]
    },  {
      semester: 'Second Semester',
      data: [
        {
          subject: 'Bangla',
          ob_mark: 88,
          hi_mark: 98,
          mark: 88,
          point: 5.00,
          grade: 'A+'
        },{
          subject: 'Math',
          ob_mark: 88,
          hi_mark: 98,
          mark: 88,
          point: 5.00,
          grade: 'A+'
        },{
          subject: 'English',
          ob_mark: 88,
          hi_mark: 98,
          mark: 88,
          point: 5.00,
          grade: 'A+'
        }
      ]
    }
    
  ]
  marks = [
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
