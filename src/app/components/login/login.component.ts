import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { authRequest } from 'src/app/model/authRequest.model';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logout() {
    console.log(localStorage.getItem('username'));
    this.token = '';
    localStorage.clear();
    console.log(localStorage.getItem('username'));
  }
  AuthRequest: authRequest = {
    username: '',
    password: '',
  };
  token: any;
  role: any;

  constructor(
    private authenticateService: AuthenticateService,
    private route: Router
  ) {}
  readFormData(formData: any) {
    this.AuthRequest.username = formData.form.value.username;
    this.AuthRequest.password = formData.form.value.password;

    this.generateToken();
  }

  generateToken() {
    let response = this.authenticateService.generateToken(this.AuthRequest);

    console.log(this.AuthRequest);
    response.subscribe((genToken: any) => {
      this.token = genToken;
      this.role = this.authenticateService.getRole(genToken);
      this.authenticateService.authorize(genToken);

      this.navigate(this.token);
    });
  }

  private navigate(token: any) {
    this.authenticateService.authorize(token);

    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');

    console.log(username + " " + role);

    if(role === 'Admin'){
      console.log('Admin login, Navigating to Admin Dashboard');
      this.route.navigate(['/admin']);
    }
    if(role === 'FlightOwner'){
      console.log('Flight Owner login, Navigating to Flight Owner Dashboard');
      this.route.navigate(['/flight-owner']);
    }
  }
}
