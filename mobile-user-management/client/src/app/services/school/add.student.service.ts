import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Student} from '../../model/student';
import {User} from '../../model/user';

let API_URL = "http://localhost:9090/api";

@Injectable({
  providedIn: 'root'
})

export class AddStudentService {
  currentUser: User;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "/user/logout", {})
    .pipe(map(response => {
      localStorage.removeItem('currentUser');
    }));
  }
  
 addStudent(student: Student): Observable<any> {
    return this.http.post(API_URL + "/v1/students/add", JSON.stringify(student), {headers: this.headers});
  }


}
