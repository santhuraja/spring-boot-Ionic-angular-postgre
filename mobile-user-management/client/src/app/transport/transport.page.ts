import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {MenuController} from '@ionic/angular';
import { Route } from '../model/route';
import { TransportService } from '../services/school/transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage implements OnInit {
  
  routes: Array<Route>;
  /*
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
  ] */

  constructor(
    private transportService: TransportService, 
    private router: Router,
  private menu: MenuController) {}

  ngOnInit() {
    this.menu.enable(true);
    this.findAllRoutes();
  }

  findAllRoutes(){
    this.transportService.findAllRoutes().subscribe(data => {
      this.routes = data;
    });
  }

  addRoute(routeName){
    let navParam: NavigationExtras = {
      queryParams: {
        notice: JSON.stringify(routeName)
      }
    }
    this.router.navigate(['/addroute'], navParam);
  }

  editRoute(route:Route){
    let navParam: NavigationExtras = {
      queryParams: {
        notice: JSON.stringify(route.name)
      }
    }
    this.router.navigate(['/addroute'], navParam);
    localStorage.setItem('routeInfo', JSON.stringify(route));
  }  

}
