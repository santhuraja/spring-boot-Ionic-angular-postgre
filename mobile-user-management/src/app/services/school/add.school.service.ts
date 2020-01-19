import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {School} from '../../model/school';
import {User} from '../../model/user';

let API_URL = "http://localhost:8080/api/school/add";

@Injectable({
  providedIn: 'root'
})

export class AddSchoolService {
  currentUser: User;
  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {})
    .pipe(map(response => {
      localStorage.removeItem('currentUser');
    }));
  }
  
 addSchool(school: School): Observable<any> {
    return this.http.post(API_URL, JSON.stringify(school), {headers: new HttpHeaders({ContentType:'application/json', authorization:'Basic ' + btoa(this.currentUser.username + ":" + this.currentUser.password)})});
  }

  findAllSchools(): Observable<any> {
    return this.http.get(API_URL + "all",
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }
}
