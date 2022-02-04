import { Component, OnInit } from '@angular/core';
import { ShoppingcartserviceService } from '../../shoppingcartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:{name:any,pass:string,status:string}={name:null,pass:null,status:null};
  constructor(private service:ShoppingcartserviceService) { 
    this.service.loggedUser.subscribe(userInfo=>{
      this.isLogged = userInfo;
    })
  }

  ngOnInit() {
  }

}
