import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    CommonModule,
    FormsModule,
    IonicModule
   
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
