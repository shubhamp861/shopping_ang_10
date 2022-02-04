import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuserivceService } from '../menuserivce.service';
import { ShoppingcartserviceService } from '../../shoppingcartservice.service';

@Component({
  selector: 'app-menu-item-box',
  templateUrl: './menu-item-box.component.html',
  styleUrls: ['./menu-item-box.component.css']
})
export class MenuItemBoxComponent implements OnInit {
  products=[];
  finalProductList=[];
  shoppingCartList=[];
  couunt=0;
  constructor(private menuService:MenuserivceService,private shoppingService:ShoppingcartserviceService){
    
  }
  ngOnInit() {
    this.menuService.getAllProduct()
    .subscribe((data:any)=>{
      data.forEach(element => {
        this.products.push(element);
        this.finalProductList.push(element);
      });
    });
    this.menuService.filterKey.subscribe(data=>this.doFilter(data));
  }
  doFilter(filterKey){
    if(filterKey == 'all'){this.products = this.finalProductList;}
    else{this.products = this.finalProductList.filter(key =>key.type == filterKey);}
  }
  addToCard(id:number)
  {
    let item = this.finalProductList.find(val=>val.id==id);
    item.qty=1;
    item.isAdd=true;
    item.cartprice=item.price;
    this.shoppingCartList.push(item);
    this.shoppingService.finalShoppingCart.next(this.shoppingCartList);
  }
  addToCardAction(id:number,action:string){
    let item=this.shoppingCartList.find(val=>val.id==id);
    if(action == 'add') {
      item.qty = item.qty+1;
      item.cartprice=item.cartprice+item.price
    }
     else{item.qty = item.qty-1;}
    if(item.qty ==0){
      this.shoppingCartList = this.shoppingCartList.filter(val=>val.id !=id);
      let updateItem = this.finalProductList.find(val=>val.id == id);
      this.finalProductList = this.finalProductList.filter(val=>val.id!=id);
      this.finalProductList.push(updateItem);
      let prodItem = this.products.find(val=>val.id == id);
      let indexItem = this.products.indexOf(prodItem);
      prodItem.isAdd = false;
      prodItem.qty=0;
      this.products = this.products.filter(val=>val.id!=id);
      this.products.splice(indexItem,0, prodItem);
    }
    this.shoppingService.finalShoppingCart.next(this.shoppingCartList);
  }
  getCount(id:number){
    let item = this.shoppingCartList.find(val => val.id == id);
    return item.qty;
  }
}
