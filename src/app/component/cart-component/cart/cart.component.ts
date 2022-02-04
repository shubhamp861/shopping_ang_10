import { Component, OnInit } from '@angular/core';
import { ShoppingcartserviceService } from '../../shoppingcartservice.service';
import { interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  total=0;
  shoppingCart = [];
  sub;
  message=null;
  constructor(private shoppingService:ShoppingcartserviceService,private routs:Router) {
  interval(100).subscribe(x=>this.Add());
  }

    Add(){
    let count = 0;
    this.shoppingCart = [];
    this.shoppingService.refreshShopingList.forEach(x=>{
    this.shoppingCart.push(x);
    count= count+(x.cartprice);});
    this.total=Number((count.toString()).substring(0,3));;
 }
 cartCLear(){
   this.shoppingService.finalShoppingCart.next([]);
   this.total=0.0;
 }

 navigate(){
   if(this.shoppingCart.length != 0 && this.total != 0) {this.routs.navigate(["/checkout",JSON.stringify(this.shoppingCart)]); this.message=null; }
    else this.message = "You have 0 quantity for item in your cart, please add atleast one !";
 }
 action(action,id){
   this.shoppingService.doAction(action,id);
 }
}
