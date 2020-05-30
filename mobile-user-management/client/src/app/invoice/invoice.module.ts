import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';


import { InvoicePage } from './invoice.page';


const routes: Routes = [
  {
    path: '',
    component: InvoicePage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoicePage]
})
export class InvoicePageModule {}
