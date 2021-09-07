import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  email:any;
  amount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  makePayment(){
    // let handler = PaystackPop.setup()
  }

}
