import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventPage } from './event.page';
import { NgCalendarModule  } from 'ionic2-calendar';
const routes: Routes = [
  {
    path: '',
    component: EventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventPage]
})
export class EventPageModule {}

