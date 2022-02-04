import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuserivceService {
  products;
  filterKey = new Subject<String>();
  constructor(private httpClient: HttpClient){
  }
  getAllProduct(filter:string='All'){
    return this.httpClient.get("assets/data/coldef.json");
  }
}
