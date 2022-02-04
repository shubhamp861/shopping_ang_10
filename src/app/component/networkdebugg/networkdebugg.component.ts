import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-networkdebugg',
  templateUrl: './networkdebugg.component.html',
  styleUrls: ['./networkdebugg.component.css']
})
export class NetworkdebuggComponent{
  data;
  constructor() { 
    // interval(10).subscribe(x=>this.data = window.navigator)
  }
}
