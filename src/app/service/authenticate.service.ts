import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  helper = new JwtHelperService();

  authorize(token : any){
    const tokenString = typeof token === 'string' ? token : JSON.stringify(token);

    // let decodeToken=jwtDecode(tokenString);
    // console.log(decodeToken)

    const decodedToken = this.helper.decodeToken(token);

    if(!decodedToken){
      console.error('Error decoding JWT token');
    }

    localStorage.setItem('role', decodedToken.role);
    localStorage.setItem('username', decodedToken.sub);
    localStorage.setItem('exp', decodedToken.exp);

    localStorage.setItem('token', token);
  }
  getRole(token: any) {
    // // Convert token to a string if it's not already
    // const tokenString = typeof token === 'string' ? token : JSON.stringify(token);

    // // let decodeToken=jwtDecode(tokenString);
    // // console.log(decodeToken)

    // const decodedToken = this.helper.decodeToken(token);

    // localStorage.setItem('role', decodedToken.role);
    // localStorage.setItem('username', decodedToken.sub);
    // localStorage.setItem('exp', decodedToken.exp);

    // localStorage.setItem('token', token);
    // console.log(localStorage.getItem('exp'));
    // console.log(localStorage.getItem('token'))

    return localStorage.getItem('role');
  }

  baseUrl: string = 'http://localhost:8080/simply-fly/customers/';
  constructor(private http: HttpClient) {}

  generateToken(AuthRequest: any) {
    // console.log(AuthRequest.username);
    // console.log(AuthRequest.password);
    // console.log(this.baseUrl + 'login');
    return this.http.post(this.baseUrl + 'login', AuthRequest, {
      responseType: 'text' as 'json',
    });
  }
}
