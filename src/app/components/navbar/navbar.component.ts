import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authRequest } from 'src/app/model/authRequest.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterContentChecked{

  username : string | null = 'Guest';
  
  constructor(private route : Router) {}

  ngAfterContentChecked(): void {  
    this.username = localStorage.getItem('username');
  } 

  logout() {
    console.log(localStorage.getItem('username'));
    this.token = '';
    localStorage.clear();
    localStorage.setItem('username', 'Guest');
    console.log(localStorage.getItem('username'));

    this.route.navigate(['/login']);
    this.username = 'Guest';
  }
  AuthRequest: authRequest = {
    username: '',
    password: '',
  };
  token: any;
  role: any;

  
}
