import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { MenuListComponent } from './component/menu/menu-list/menu-list.component';
import { MenuItemBoxComponent } from './component/menu/menu-item-box/menu-item-box.component';
import { CartComponent } from './component/cart-component/cart/cart.component';
import { CartCountComponent } from './component/cart-component/cart-count/cart-count.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ConfirmOrderComponent } from './component/confirm-order/confirm-order.component';
import { OrdersummaryComponent } from './component/ordersummary/ordersummary.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { Menugaurd } from './component/gaurd/menugaurd.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartCountComponent,
    MenuComponent,
    MenuListComponent,
    MenuItemBoxComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmOrderComponent,
    OrdersummaryComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Menugaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
