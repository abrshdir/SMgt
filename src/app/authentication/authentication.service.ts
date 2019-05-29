import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationConfigService} from './authentication-config.service';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationConfig: AuthenticationConfigService) {
  }

  
  login(username: string, password: string) {
    return this.http.post<any>(this.authenticationConfig.baseUrl + '/auth', {username: username, password: password})
      .pipe(map((res: any) => {
        // login successful if there's a jwt token in the response
        if (res && res.token) {
          localStorage.setItem(this.authenticationConfig.tokenKey, res.token);
          localStorage.setItem(this.authenticationConfig.roleKey, res.authorities);
        } else {
          this.router.navigate(['/login/' + res.message]);
        }
      }));
  }

  logout() {
    localStorage.removeItem(this.authenticationConfig.tokenKey);
    localStorage.removeItem(this.authenticationConfig.roleKey);
    this.router.navigate(['/login/']);
  }

  isLoggedIn() {
    if (localStorage.getItem(this.authenticationConfig.tokenKey)) {
      return true;
    } else {
      return false;
    }
  }

}
