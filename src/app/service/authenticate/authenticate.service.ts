import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { authRequest } from 'src/app/models/authRequest';
import { JwtDecodeOptions } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService  {
  helper = new JwtHelperService();
  getRole(token: any) {
    // // Convert token to a string if it's not already
     const tokenString = typeof token === 'string' ? token : JSON.stringify(token);

    // let decodeToken=jwtDecode(tokenString);
    // console.log(decodeToken)

    

const decodedToken =this.helper.decodeToken(tokenString);
console.log( "the decoded token is"+decodedToken)
  }
 
  baseUrl:string="http://localhost:8080/simply-fly/";
  constructor(private http:HttpClient) { }


  generateToken(AuthRequest: any) {

    console.log(AuthRequest.username);
    console.log(AuthRequest.password);
    console.log(this.baseUrl+"login")
    return this.http.post(this.baseUrl+"customers/login",AuthRequest,{responseType:'text' as 'json'});
  }
}
