import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  itemQuantity:any;
  activateModal:boolean = false;
  product:any  = [];
  productId:any;
  productData:any = [];
  changePrice:number = 0;

  cartItems:any = [];

  constructor(private route:ActivatedRoute, private productService:ProductService) {

  }

  ngOnInit(): void {
      //receive data through route
    this.productId = Number(this.route.snapshot.paramMap.get('slug'));
    this.loadProductDetails(this.productId)
  }

  loadProductDetails(id:number){
    this.productService.getProduct().subscribe( product => {
      this.product = product;
      for (let index = 0; index < this.product.length; index++) {
        if(this.product[index].productId === this.productId){
          this.productData = this.product[index];
        }

      }
    })
  }

  activateActions(){
    this.addItemToCart();
    this.openModal();
  }

  openModal(){

    this.activateModal = !this.activateModal;
  }

  closeModal(){
    this.activateModal = false;
  }

  addItemToCart(){
    const cart:any = {
      "productId": this.productData.productId,
      "productName": this.productData.productName,
      "price": this.productData.price,
      "image": this.productData.imageUrl,
      "quantity": this.itemQuantity,
      "totalAmount": this.changePrice
    }

    this.cartItems.push(cart)

    localStorage.setItem('cartItems',JSON.stringify(this.cartItems))
  }

  calculatePrice(){
    this.changePrice = this.productData.price * this.itemQuantity;
  }

  // addToCart(){
  //   this.cartItems = {
  //     "productId": this.productData.productId,
  //     "productName": this.productData.productName,
  //     "price": this.changePrice,
  //     "image": this.productData.imageUrl,
  //     "quantity": this.itemQuantity
  //   }

  //   console.log(this.cartItems)
  // }

}
