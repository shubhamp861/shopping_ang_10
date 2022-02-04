import { Component,VERSION } from '@angular/core';
import { ShoppingcartserviceService } from './component/shoppingcartservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoopingCart';
  isUser=false;
  loggedUser;
  constructor(private service:ShoppingcartserviceService){
    console.log(VERSION.full);
     this.service.loggedUser.subscribe(value=>{
       this.isUser=true;
       this.loggedUser=value;
     })
  }
}
