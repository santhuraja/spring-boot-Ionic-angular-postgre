import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
  fees=[
    {
      title: 'Admission fees -  class 5',
      due_date: '17th aug, 2019',
      amount: '$570',
      paid: '$500',
      balance: '$70',
      status: 'Partial'
    },
    {
      title: 'Admission fees -  class 5',
      due_date: '17th aug, 2019',
      amount: '$570',
      paid: '$500',
      balance: '$70',
      status: 'Unpaid'
    },
    {
      title: 'Admission fees -  class 5',
      due_date: '17th aug, 2019',
      amount: '$570',
      paid: '$570',
      balance: '$0',
      status: 'Paid'
    }
  ]
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  viewInvoice(){
    this.route.navigate(['/invoice']);
  }

}
