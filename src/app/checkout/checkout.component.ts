import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  productId:any;
  product:any = [];
  productData:any = [];
  openModal:boolean = false;
  productReturned:any;
  productItems:any;

  firstName:any;
  lastName:any;
  email:any;
  phone:any;
  address:any;
  city:any;
  country:any;

  constructor(private route:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    //this.productId = Number(this.route.snapshot.paramMap.get('slug'))
    // this.loadProductDetails(this.productId);
    this.getCartItems();
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

  getCartItems(){
    const item:any = localStorage.getItem("cartItems")
    this.productReturned = JSON.parse(item);
    this.productItems = this.productReturned;
    console.log(this.productItems);

  }

  modalOpen():void{
    this.openModal = !this.openModal;

  }
  closeModal(){
    this.openModal = false;
  }

}
