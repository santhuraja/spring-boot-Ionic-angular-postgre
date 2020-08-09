import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ClassTimetableService } from '../services/school/class.timetable.service';
import { ClassTimetable } from '../model/classTimetable';

@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.page.html',
  styleUrls: ['./class-timetable.page.scss'],
})
export class ClassTimetablePage implements OnInit {

/*
  timeTable = [
    {
      code: 'MAT',
      subject: 'Math',
      time: '01:00pm - 02:00pm',
      color: '#3880ff'
    },
    {
      code: 'ENG',
      subject: 'English',
      time: '02:00pm - 03:00pm',
      color: '#eb445a'
    },
    {
      code: 'ADV',
      subject: 'Advance Tech',
      time: '03:00pm - 04:00pm',
      color: '#1994ff'
    },
    {
      code: 'COM',
      subject: 'Computer',
      time: '04:00pm - 05:00pm',
      color: '#5a00f6'
    }
  ]
  */

  timeTable: Array<ClassTimetable>;

  constructor(
    private classTimetableService: ClassTimetableService,
    private menuController: MenuController) { }
 

  ngOnInit() {
    this.menuController.enable(true);
    this.findClassTimetablesByClass(4);
  }

  findClassTimetablesByClass(classGrade : number) {
    this.classTimetableService.findClassTimetablesByClass(classGrade).subscribe(data => {
      this.timeTable = data;
    });
  }

}
