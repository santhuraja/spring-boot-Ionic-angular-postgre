import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class AddRoutePage implements OnInit {
  routes = [
    {
      name: 'Route 1'
    },
    {
      name: 'Route 2'
    },
    {
      name: 'Route 3'
    },
    {
      name: 'Route 4'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
