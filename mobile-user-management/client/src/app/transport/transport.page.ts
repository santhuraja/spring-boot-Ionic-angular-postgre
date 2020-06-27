import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage implements OnInit {
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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addRoute(routeName){
    let navParam: NavigationExtras = {
      queryParams: {
        notice: JSON.stringify(routeName)
      }
    }
    this.router.navigate(['/addroute'], navParam);
  }

}
