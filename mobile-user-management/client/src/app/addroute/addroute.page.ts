import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { TransportService } from '../services/school/transport.service';
import { Route } from '../model/route';
import { RouteStop } from '../model/routeStop';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddRoutePage implements OnInit {
  public route = {} as Route;
  routeStops: Array<RouteStop>;
  routeForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private menuController: MenuController,
    private transportService: TransportService) {
    this.routeForm = formBuilder.group({
      name: new FormControl(),
      startPoint: new FormControl(),
      endPoint: new FormControl(),
      vehicle: new FormControl(),
      description: new FormControl()
    });
  }

  ngOnInit() {
    this.menuController.enable(true);
    if (localStorage.getItem('routeInfo') != null) {
      this.route = JSON.parse(localStorage.getItem('routeInfo'));
      this.findByRouteStopsId(this.route.routeId);
      this.route.routeStops = this.routeStops;
    }
  }

  findByRouteStopsId(routeId: number){
    this.transportService.findByRouteStopsId(routeId).subscribe(data => {
      this.routeStops = data;
    });
  }

  addRoute() {

  }
}
