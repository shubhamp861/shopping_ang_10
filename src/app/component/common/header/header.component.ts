import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingcartserviceService } from '../../shoppingcartservice.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{
  isLogged: {
    name: any, status: string, firstName: string,
    lastName: string,
    photoUrl: string,
    idToken: string,
    authToken: string
  } = 
  {
      name: null, status: null, firstName: null,
      lastName: null,
      photoUrl: null,
      idToken: null,
      authToken: null
    };
    isActive=true;
  constructor(private service: ShoppingcartserviceService,private navRoute:Router) {
   let subs = interval(10).subscribe(x=>{
      if(localStorage.getItem('google_auth')){
        this.isLogged = JSON.parse(localStorage.getItem('google_auth'));
      }
      else {
       this.navRoute.navigate(['/']);
      } });
      interval(10).subscribe(x=>{
        this.isActive = window.navigator.onLine;
      });   
  }
  ngOnDestroy(): void {
    // localStorage.removeItem('google_auth');
    // sessionStorage.clear()
  }
  signOut(): void {
    localStorage.removeItem('google_auth');
    sessionStorage.clear();
    this.isLogged = {
      name: null, status: null, firstName: null,
      lastName: null,
      photoUrl: null,
      idToken: null,
      authToken: null
    };
    this.navRoute.navigate(['/']);
  }
}
