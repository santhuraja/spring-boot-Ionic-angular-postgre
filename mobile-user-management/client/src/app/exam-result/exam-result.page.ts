import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ResultsService } from '../services/school/results.service';
import { Result } from '../model/result';
import { ResultSummary } from '../model/resultSummary';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {
  errorMessage: string;
  results: Array<Result>;
  viewResultSummary: ResultSummary;

  constructor(
    private resultsService: ResultsService,
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
      this.findResultsByStudentIdAndClassAndSemester(101, 3, 'I');
    }

    findResultsByStudentIdAndClassAndSemester(studentId : number, classGrade : number, semester : string) {
      this.resultsService.findResultsByStudentIdAndClassAndSemester(studentId, classGrade, semester).subscribe(data => {
        this.viewResultSummary = data;
        this.results = <Array<Result>>this.viewResultSummary.results;
              
      },HttpResponse => {
        this.errorMessage = HttpResponse.error.message;
        
      });
    }

}
