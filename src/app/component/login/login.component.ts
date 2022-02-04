import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingcartserviceService } from '../shoppingcartservice.service';
// import {} from '../../../../src/assets/Images/login.jpg';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isSubmitName=false;
  isSubmitPass=false;
  constructor( private navRoute:Router,private service:ShoppingcartserviceService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name : new FormControl('',Validators.required),
      pass : new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    if(this.loginForm.controls.pass.errors)  this.isSubmitPass =true;
     else this.isSubmitPass =false;
     if(this.loginForm.controls.name.errors)  this.isSubmitName =true;
     else this.isSubmitName =false; 
    console.log(this.loginForm);
    if(this.loginForm.valid){
      let user={
        name:((this.loginForm.controls.name.value) as string).toUpperCase(),
        pass:'test',
        status:'online'
      }
      this.service.loggedUser.next(user);
      this.navRoute.navigate(['/menu']);
    }
  }
}
