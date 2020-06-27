import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ResultsService } from '../services/school/results.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {

  results: Array<Result>;
  constructor(
    private resultsService: ResultsService,
    private router: Router,
    private menuController: MenuController) { }

  /*
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
  
    */

    ngOnInit() {
      this.menuController.enable(true);
      this.findResultsByStudentIdAndClass(100, 2020);
    }
  
    findResultsByStudentIdAndClass(studentId : number, classGrade : number) {
      this.resultsService.findResultsByStudentIdAndClass(studentId, classGrade).subscribe(data => {
        this.results = data;
      });
    }
  

}
