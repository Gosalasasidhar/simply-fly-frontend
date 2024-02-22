import { Component, Provider } from '@angular/core';
import { authRequest } from 'src/app/models/authRequest';
import { AuthenticateService } from 'src/app/service/authenticate/authenticate.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
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
    
   response.subscribe( (genToken)=> {
    this.token = genToken ;console.log(genToken); });

    this.authenticateService.getRole(this.token);


  }
  readFormData(formData:any){

    this.AuthRequest.username = formData.form.value.username;
    this.AuthRequest.password = formData.form.value.password;

    this.generateToken();

 }

}
