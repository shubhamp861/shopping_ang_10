import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { ShoppingcartserviceService } from '../shoppingcartservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList=[];
  profileForm:FormGroup;
  isSubmit=false;

  constructor(private routes:ActivatedRoute,private navROute:Router,private service:ShoppingcartserviceService) { 
      this.routes.params.subscribe(val=>{
        this.cartList = JSON.parse(val.productList);})
        this.profileForm = new FormGroup({
          name: new FormControl('',Validators.required),
          address: new FormControl('',Validators.required),
          city: new FormControl('',Validators.required),
          code: new FormControl('',Validators.required),
        });
      }

  ngOnInit() {
  }
  onSubmit() {
    this.isSubmit=true;
    console.warn(this.profileForm.value);
    if(this.profileForm.valid){
      this.navROute.navigate(["/orderconfirm"]);
    }
  }
  getPostalCode(){
    this.service.getPostalCode(this.profileForm.controls.code.value);
  }
}
