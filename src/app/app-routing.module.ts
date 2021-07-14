import { IndexComponent } from '../app/index/index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: "",
    component: IndexComponent
  }
]

@NgModule({
  declarations: [],
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
