import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ExamScheduleService } from '../services/school/exams.service';
import { ExamSchedule } from '../model/examSchedule';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  exams: Array<ExamSchedule>;

  constructor(
    private examScheduleService: ExamScheduleService,
    private menuController: MenuController) { }

/*
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
  */

  ngOnInit() {
    this.menuController.enable(true);
    this.findExamSchedulesByClass(4);
  }

  findExamSchedulesByClass(classGrade : number) {
    this.examScheduleService.findExamSchedulesByClass(classGrade).subscribe(data => {
      this.exams = data;
    });
  }

}
