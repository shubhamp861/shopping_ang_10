import { Component, OnInit } from '@angular/core';
import { MenuserivceService } from '../menuserivce.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu_list:any;
  constructor(private menuService:MenuserivceService) { }

  ngOnInit() {
    this.menu_list = ['Bread','Dairy','Fruits','Spices','vegetables'];
  }
  getFilterProduct(filter){
    this.menuService.filterKey.next(filter);
  }
}
