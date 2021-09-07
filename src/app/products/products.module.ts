import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: ProductsComponent
      }
    ]),
    CommonModule
  ]
})
export class ProductsModule { }
