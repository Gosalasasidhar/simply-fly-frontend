import { Component } from '@angular/core';
import { authRequest } from 'src/app/model/authRequest.model';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
logout() {
  console.log(localStorage.getItem("username"))
this.token='';
localStorage.clear();
console.log(localStorage.getItem("username"))

}
  AuthRequest:authRequest={
    username: '',
    password: ''
  };
  token:any;
  role:any;

   constructor(private authenticateService:AuthenticateService){
    
  }

  
  generateToken() {
   let response= this.authenticateService.generateToken(this.AuthRequest);
    
   response.subscribe( (genToken: any)=> {
    this.token = genToken ;
    this.authenticateService.getRole(genToken)
   
  });
 


  }
  readFormData(formData:any){

    this.AuthRequest.username = formData.form.value.username;
    this.AuthRequest.password = formData.form.value.password;

    this.generateToken();

 }
}
