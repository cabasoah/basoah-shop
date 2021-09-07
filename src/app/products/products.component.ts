import { ProductService } from './../services/product.service';
import { IProduct } from './../details/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products:IProduct[] = [];
  productItems:IProduct[] = [];

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
        this.productItems = this.products;
      },
     // error: err => this.errorMessage = err,
    })
  }

}
