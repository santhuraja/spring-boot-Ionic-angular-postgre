import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

  getRoles(checkRole: string): boolean {
    if (!checkRole || checkRole.length === 0) {
      return false;
    }
    let granted = this.keycloakService.getUserRoles().indexOf(checkRole) > -1 ? true : false;
    return granted
  }
}