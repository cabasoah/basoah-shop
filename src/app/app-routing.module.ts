import { IndexComponent } from '../app/index/index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "details",
    loadChildren: () => import("./details/details.module").then( m => m.DetailsModule)
  },
  {
    path: "checkout",
    loadChildren: () => import("./checkout/checkout.module").then( m => m.CheckoutModule)
  },
  {
    path: "cart",
    loadChildren: () => import("./cart/cart.module").then(m => m.CartModule)
  },
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "payment",
    loadChildren: () => import("./payment/payment.module").then(m => m.PaymentModule)
  },
  {
    path: "account",
    loadChildren: () => import("./account/account.module").then(m => m.AccountModule)
  }

]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      initialNavigation:"enabled"
    })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
