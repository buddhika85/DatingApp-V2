import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  // login user
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Logged in");
      },
      error => {
        console.log("Failed to login");
      }
    );
  }

  // logout user
  logout() {
    const token = localStorage.getItem('token');
    if (token)
    {
      localStorage.removeItem('token');
      console.log('Logged out');
    }
  }
  
  // check logged in or not
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
