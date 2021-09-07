import { IProduct } from '../../details/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {

  productList:IProduct[] = [];
  products:IProduct[] = [];
  errorMessage:string = "";

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
        this.productList = this.products;
      },
      error: err => this.errorMessage = err,
    })
  }

}
