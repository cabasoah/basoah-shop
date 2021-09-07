import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: CheckoutComponent
      }
    ])
  ]
})
export class CheckoutModule { }
