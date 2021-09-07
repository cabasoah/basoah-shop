import { IProduct } from './../details/product';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:"root"
})

export class ProductService{

  private productUrl = './assets/products/product.json';

  constructor( private http:HttpClient){

  }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl);
  }

  getProduct():Observable<IProduct>{
    return this.http.get<IProduct>(this.productUrl);

  }
}
