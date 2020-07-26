import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SyllabusService } from '../services/school/syllabus.service';
import { Syllabus } from '../model/syllabus';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {
 
  syllabuses: Array<Syllabus>;

  constructor(
    private syllabusService: SyllabusService,
    private menuController: MenuController) { }

  ngOnInit() {
    this.menuController.enable(true);
    this.findSyllabusByClass(4);
  }

  findSyllabusByClass(classGrade : number) {
    this.syllabusService.findSyllabusByClass(classGrade).subscribe(data => {
      this.syllabuses = data;
    });
  }

  /*
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
  */



}
