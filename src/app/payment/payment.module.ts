import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:"",
        component: PaymentComponent
      }
    ])
  ]
})
export class PaymentModule { }
