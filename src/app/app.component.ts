import { Component,VERSION, OnDestroy } from '@angular/core';
import { ShoppingcartserviceService } from './component/shoppingcartservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'shoopingCart';
  isUser=false;
  loggedUser;
  constructor(private service:ShoppingcartserviceService){
    console.log(VERSION.full);
    localStorage.removeItem('google_auth');
    sessionStorage.clear()
     this.service.loggedUser.subscribe(value=>{
       this.isUser=true;
       this.loggedUser=value;
     })
  }
  ngOnDestroy(): void {
    localStorage.removeItem('google_auth');
    sessionStorage.clear()
  }
}
