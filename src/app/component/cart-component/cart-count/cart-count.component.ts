import { Component, OnInit } from '@angular/core';
import { ShoppingcartserviceService } from '../../shoppingcartservice.service';

@Component({
  selector: 'app-cart-count',
  template: `
       <style>
       #count{
        background-color: rgb(236 236 45);
        border-radius: 13px;
        width: 24px;
        padding-left: 2px;
        margin-top: 3px;
        text-aling:center;
    }
    }
       </style>
       <div id="count">
         <p style="text-align: center;" routerLink="/cart">{{count}}</p>
      </div> `
})
export class CartCountComponent implements OnInit {
  count:number=0;
  constructor(private shoppingService:ShoppingcartserviceService) { }
  ngOnInit() {
    this.shoppingService.finalShoppingCart.subscribe(val=>{
      let total = 0;
      val.forEach(val=>{total = total+val.qty})
      this.count = total;
    })
  }

}
