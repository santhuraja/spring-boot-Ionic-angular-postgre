import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Route} from '../../model/route';
import {User} from '../../model/user';
import {properties} from 'src/init';

let API_URL = properties.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class TransportService {
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
  
  findAllRoutes(): Observable<any> {
    return this.http.get(API_URL + "/api/v1/transport/routes", {headers: this.headers});
  }

  findByRouteStopsId(routeId: number): Observable<any> {
    return this.http.get(API_URL + "/api/v1/transport/routeStops/" + routeId, {headers: this.headers});
  }  
}
