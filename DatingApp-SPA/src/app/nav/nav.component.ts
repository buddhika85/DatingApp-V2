import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify : AlertifyService) {}

  ngOnInit() {}

  // login user
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('Logged in successfully');
      },
      error => {
        this.alertify.error('Login Failure - \n' + error)
      }
    );
  }

  // logout user
  logout() {
    const token = localStorage.getItem('token');
    if (token)
    {
      localStorage.removeItem('token');
      this.alertify.message('Logged out successfully');
    }
  }
  
  // check logged in or not
  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }
}
