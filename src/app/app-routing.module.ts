import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { CartComponent } from './component/cart-component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ConfirmOrderComponent } from './component/confirm-order/confirm-order.component';
import { OrdersummaryComponent } from './component/ordersummary/ordersummary.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { Menugaurd } from './component/gaurd/menugaurd.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { NetworkdebuggComponent } from './component/networkdebugg/networkdebugg.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"menu",component:MenuComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout/:productList",component:CheckoutComponent},
  {path:"orderconfirm",component:ConfirmOrderComponent},
  {path:"manageorder",component:OrdersummaryComponent},
  {path:"profile",component:ProfileComponent},
  {path:"network",component:NetworkdebuggComponent},
  {path:'**',component:ErrorpageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
