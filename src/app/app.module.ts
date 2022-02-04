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
import {  SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { NetworkdebuggComponent } from './component/networkdebugg/networkdebugg.component';


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
    LoginComponent,
    ErrorpageComponent,
    NetworkdebuggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [Menugaurd,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "627818141722-9s5gdqtvi70tn2o8fv77bc98ibv8ru81.apps.googleusercontent.com"
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              "644878710163974"
              )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
