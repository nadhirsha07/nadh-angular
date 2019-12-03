import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Products;
  show:boolean=false;
  pname:string;
  constructor() { }

  ngOnInit() {
    this.Products=["Camera","Printer","Laptop"]
  }
  Add(){
    this.Products.push(this.pname)
  }
  del(i:Number){
  this.Products.splice(i,1);
  }
  showtable(){
    this.show=!this.show
  }
}
