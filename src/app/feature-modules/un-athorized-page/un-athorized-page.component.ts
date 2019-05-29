import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-un-athorized-page',
  templateUrl: './un-athorized-page.component.html',
  styleUrls: ['./un-athorized-page.component.scss']
})
export class UnAthorizedPageComponent implements OnInit {

  constructor(
    private router : Router,
    private location : Location
    ) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  goToLoginPage(){
    this.router.navigate(['/login']);
  }

}
