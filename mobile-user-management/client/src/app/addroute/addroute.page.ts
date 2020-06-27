import { Component, OnInit } from '@angular/core';
import {Route} from '../model/route';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddRoutePage implements OnInit {
  public route = {} as Route;
  routeForm : FormGroup;

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
  constructor(public formBuilder: FormBuilder,private menuController: MenuController) {
    this.routeForm = formBuilder.group({
      name:  new FormControl(),
      routeStart  :  new FormControl(),
      routeEnd:  new FormControl(),
      vehicle:new FormControl(),
      note:new FormControl()
      
      });
  
   }

  ngOnInit() {
    this.menuController.enable(true);
  }

  addRoute() {
    
  }
}
