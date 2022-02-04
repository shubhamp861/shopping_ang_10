import { Component, OnInit } from '@angular/core';
import { ShoppingcartserviceService } from '../shoppingcartservice.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLogged:{name:any,status:string,firstName:string,
    lastName:string,
    photoUrl:string,
    idToken:string,
    authToken:string};
  constructor(private service:ShoppingcartserviceService) {
    let su = interval(100).subscribe(x=>{
      if(localStorage.getItem('google_auth')){
        this.isLogged = JSON.parse(localStorage.getItem('google_auth'));
        su.unsubscribe();
      }}
    );
   }

  ngOnInit() {

  }

}
