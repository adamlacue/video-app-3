import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryOfComputersPageRoutingModule } from './history-of-computers-routing.module';

import { HistoryOfComputersPage } from './history-of-computers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryOfComputersPageRoutingModule
  ],
  declarations: [HistoryOfComputersPage]
})
export class HistoryOfComputersPageModule {}
