import { Component, OnInit } from '@angular/core';
import {Attendance} from '../model/Attendance';
import { StudentService } from '../services/school/student.service';
import { Student } from '../model/student';
@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.page.html',
  styleUrls: ['./addattendance.page.scss'],
})
export class AddAttendancePage implements OnInit {
  studentList: Array<Student>;
  attendance: Attendance;
  constructor(
    private studentService: StudentService) {
    
   }

  ngOnInit() {
       this.findAllStudents();
  }
  findAllStudents(){
    this.studentService.findAllStudents().subscribe(data => {
      this.studentList = data;
    });
  }

}
