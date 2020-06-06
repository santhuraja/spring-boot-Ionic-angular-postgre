import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {
  syllabuses = [
    {
      title: 'Math',
      desc: 'Math Syllabus',
      date: '01 Apr 2019'
    },
    {
      title: 'English',
      desc: 'English Syllabus',
      date: '01 Apr 2019'
    },
    {
      title: 'History',
      desc: 'History Syllabus',
      date: '01 Apr 2019'
    },
    {
      title: 'History',
      desc: 'History Syllabus',
      date: '01 Apr 2019'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
