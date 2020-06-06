import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) { // check if authenticated
        this.keycloakAngular.login(); // go to login
        return;
      }

      const requiredRoles = route.data.roles;
      console.log("roles from token " + this.roles);
      console.log("roles from user " + requiredRoles);


      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          resolve(false);
        }
        let granted: boolean = false;
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            console.log("in if block");
            granted = true;
            break;
          }else{
            console.log("in else  block");
            this.router.navigate(['/403']);
          }
        }
        resolve(granted);
      }
    });
  }
}
