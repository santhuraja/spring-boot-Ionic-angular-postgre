import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AttendancePage } from './attendance.page';
import { NgCalendarModule  } from 'ionic2-calendar';
const routes: Routes = [
  {
    path: '',
    component: AttendancePage
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
  declarations: [AttendancePage]
})
export class AttendancePageModule {}

