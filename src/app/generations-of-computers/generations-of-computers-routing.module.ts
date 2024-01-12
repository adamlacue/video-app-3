import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerationsOfComputersPage } from './generations-of-computers.page';

const routes: Routes = [
  {
    path: '',
    component: GenerationsOfComputersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerationsOfComputersPageRoutingModule {}
