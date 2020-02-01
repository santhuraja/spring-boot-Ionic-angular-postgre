import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';
import {School} from '../model/school';

let API_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserForLogin: User;

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User> (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();  
  }
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  login(user:User): Observable<any> {
    const headers = new HttpHeaders(user ?
      {authorization:'Basic ' + btoa(user.username + ":" + user.password)}
      :
      {});

      return this.http.get<any>(API_URL + "/user/login", {headers: headers})
      .pipe(map(response => {
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
		  this.currentUserSubject.next(response);
        }
        return response;
      }));
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "/user/logout", {})
    .pipe(map(response => {
      localStorage.removeItem('currentUser');
	  this.currentUserSubject.next(null);
    }));
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + '/user/registration', JSON.stringify(user),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllUsers(): Observable<any> {
  this.currentUserForLogin = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get(API_URL + "/user/all",
  { headers: {authorization:'Bearer ' + this.currentUserForLogin.token,
	"Content-Type":"application/json; charset=UTF-8"}});
  }
}
