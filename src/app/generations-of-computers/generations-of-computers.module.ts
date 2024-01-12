import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerationsOfComputersPageRoutingModule } from './generations-of-computers-routing.module';

import { GenerationsOfComputersPage } from './generations-of-computers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerationsOfComputersPageRoutingModule
  ],
  declarations: [GenerationsOfComputersPage]
})
export class GenerationsOfComputersPageModule {}
