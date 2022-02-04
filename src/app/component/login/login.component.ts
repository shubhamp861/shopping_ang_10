import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingcartserviceService } from '../shoppingcartservice.service';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isSubmitName=false;
  isSubmitPass=false;
  constructor( private navRoute:Router,private service:ShoppingcartserviceService,private authService: SocialAuthService) { }

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
        firstName:null,
        lastName:null,
        photoUrl:"https://dummyimage.com/400x400",
        idToken:null,
        authToken:null,
        status:'online',
      }
      this.service.loggedUser.next(user);
      localStorage.setItem('google_auth', JSON.stringify(user));
      this.navRoute.navigate(['/menu']);
    }
  }

  signInGoogleHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      let user={
        firstName:(data.firstName).toUpperCase(),
        lastName:(data.lastName).toUpperCase(),
        name:data.name.toUpperCase(),
        photoUrl:data.photoUrl,
        idToken:data.idToken,
        authToken:data.authToken,
        status:'online',

      }
      localStorage.setItem('google_auth', JSON.stringify(user));
      this.service.loggedUser.next(user);
      this.navRoute.navigate(["/menu"]);
    });
  }
  signInFacebookHandler(): void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      let user={
        firstName:(data.firstName).toUpperCase(),
        lastName:(data.lastName).toUpperCase(),
        name:data.name.toUpperCase(),
        photoUrl:data.photoUrl,
        idToken:data.idToken,
        authToken:data.authToken,
        status:'online',
      }
      localStorage.setItem('google_auth', JSON.stringify(user));
      this.service.loggedUser.next(user);
      this.navRoute.navigate(["/menu"]);
    });
  }
}
