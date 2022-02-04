import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <style>
  #footer{
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
    background-color: #eeeeeeba;
}
  </style>
  <div id="footer">
    <p>© Lorem Ipsum Co., 123 Lorem Street, New York, NY</p>
  </div>
          `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
