import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';
import { StudentService } from '../services/school/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  students: Array<Student>;
  studentList: Array<Student>;
  constructor(
    private studentService: StudentService, 
    private router: Router,
  private menu: MenuController) {}

  showSearch = false;
/*
  students = [
    {
      name: 'Bob smoth',
      email: 'bob@smoth.com',
      class: 'Class 1',
      section: 'Section 1'
    },
    {
      name: 'john doe',
      email: 'john@doe.com',
      class: 'Class 2',
      section: 'Section 2'
    },
    {
      name: 'Bob smoth',
      email: 'bob@smoth.com',
      class: 'Class 1',
      section: 'Section 1'
    },
    {
      name: 'john doe',
      email: 'john@doe.com',
      class: 'Class 2',
      section: 'Section 2'
    }
  ]
*/

 async ngOnInit() {
    this.menu.enable(true);
    this.findAllStudents();
}

  goToInfo(student:Student){
    this.router.navigate(['/student-info']);
    localStorage.setItem('studentInfo', JSON.stringify(student));
  }

  findAllStudents(){
    this.studentService.findAllStudents().subscribe(data => {
      this.studentList = data;
      this.students = data;
    });
  }

  async filterList(evt) {
    this.students = this.studentList;
    const searchTerm = evt.srcElement.value;
   
    if (!searchTerm) {
      return;
    }
  
    this.students = this.students.filter(student => {
      if (student.studentName && searchTerm) {
        return (student.studentName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  
}
