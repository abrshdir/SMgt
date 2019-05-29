import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPath: string;
  isLocationProfile: boolean;
  isLocationHome: boolean;
  constructor(
    private router: Router,
    private location: Location,
    private authenticationService: AuthenticationService

  ) {
    router.events.subscribe((val) => {
      this.currentPath = location.path();
      if (this.currentPath.substring(0, 8) === "/profile") {
        this.isLocationProfile = true;
      }
      else {
        this.isLocationProfile = false;
      }
    });
  }
  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
