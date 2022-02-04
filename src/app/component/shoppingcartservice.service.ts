import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartserviceService {
  finalShoppingCart = new Subject<{id: number,
  name: string,
  path: string,
  type: string,
  price: number,
  isAdd: boolean,
  qty: number}[]
  >();

  refreshShopingList = [];
  loggedUser = new Subject<{name:any,pass:string,status:string}>();

  constructor(private httpClient: HttpClient) { 
    this.finalShoppingCart.subscribe(val=>{
      this.refreshShopingList = val;
    });
    this.loggedUser.subscribe(value=>console.log(value))
  };
  doAction(action:string,id){
       this.refreshShopingList.find(item=>{
         let change=false;
         if(item.id == id){
          if(action.toUpperCase()=='ADD'){
            item.qty = item.qty+1;
            item.cartprice=item.cartprice+item.price;
            change = true;
          }
           else if(item.qty>0){
            item.qty = item.qty-1;
            item.cartprice=item.cartprice-item.price;
            change = true;
           } 
         }
         return change;
       })
  }
  getPostalCode(val){
    this.httpClient.get("https://api.postalpincode.in/pincode/110001").subscribe(val=>console.log(val));
  }

}
