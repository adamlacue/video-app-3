import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypesOfComputerMemoryPageRoutingModule } from './types-of-computer-memory-routing.module';

import { TypesOfComputerMemoryPage } from './types-of-computer-memory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypesOfComputerMemoryPageRoutingModule
  ],
  declarations: [TypesOfComputerMemoryPage]
})
export class TypesOfComputerMemoryPageModule {}
