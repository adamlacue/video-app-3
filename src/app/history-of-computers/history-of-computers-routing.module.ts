import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryOfComputersPage } from './history-of-computers.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryOfComputersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryOfComputersPageRoutingModule {}
