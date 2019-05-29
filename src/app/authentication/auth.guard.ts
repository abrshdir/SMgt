import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationConfigService } from './authentication-config.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationConfig: AuthenticationConfigService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(this.authenticationConfig.tokenKey)) {// this checks for authentication
            if(route.data['role'] === 'ALL'){
              return true;
            }
            else if (localStorage.getItem(this.authenticationConfig.roleKey ) === route.data['role'] ) {// this checks for authorization
              return true;
            } else {
                this.router.navigate(['/unauthorized']);
              return false;
            }
          }
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/login']);
          return false;
    }
    canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(this.authenticationConfig.tokenKey)) {// this checks for authentication
          if(route.data['role'] === 'ALL'){
            return true;
          }
          else if (localStorage.getItem(this.authenticationConfig.roleKey ) === route.data['role'] ) {// this checks for authorization
            return true;
          } else {
              this.router.navigate(['/unauthorized']);
            return false;
          }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }

}
