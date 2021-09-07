import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  productItems:any = [];
  product:any;

  constructor() { }

  ngOnInit(): void {

    this.getCartItems();
  }

  getCartItems(){
    const item:any = localStorage.getItem('cartItems');
    this.product = JSON.parse(item);
    this.productItems = this.product;
    console.log(this.productItems);

  }

}
