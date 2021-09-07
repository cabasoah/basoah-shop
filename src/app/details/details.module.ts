import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';



@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
   CommonModule,
   FormsModule,
    RouterModule.forChild([
      {
        path: ":slug",
        component: DetailsComponent
      }
    ])
  ]
})
export class DetailsModule { }
