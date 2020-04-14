import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {School} from '../../model/school';
import {User} from '../../model/user';

let API_URL = "http://localhost:8080/api/v1/schools";

@Injectable({
  providedIn: 'root'
})

 export class SchoolSettingsService {
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
  
  addSchool(school: School): Observable<any> {
    return this.http.post(API_URL + "/add", JSON.stringify(school), {headers: this.headers});
  }

  findAllSchools(): Observable<any> {
    return this.http.get(API_URL + "/all", {headers: this.headers});
  }
  findSchool(): Observable<any> {
    return this.http.get(API_URL + "/active", {headers: this.headers});
  }
}
