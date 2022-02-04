import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ShoppingcartserviceService } from '../shoppingcartservice.service';

@Injectable()
export class Menugaurd implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // if(this.isLogin) 
        return true;
        //  else return false;     
    }
}