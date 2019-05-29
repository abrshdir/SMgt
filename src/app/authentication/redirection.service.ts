import {Injectable} from '@angular/core';
import {AuthenticationConfigService} from './authentication-config.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectionService {

  constructor(private authenticationConfig: AuthenticationConfigService, private router: Router) {
  }

  handleHomeRedirection() {
    if (localStorage.getItem(this.authenticationConfig.roleKey) === 'user') {
      this.router.navigate(['/homepage']);
      // }else if(localStorage.getItem(this.authenticationConfig.roleKey)=== 'USER'){
      //   this.router.navigate(['/home']);
      // }
    } else {
      this.router.navigate(['homepage']);

    }
  }
}
