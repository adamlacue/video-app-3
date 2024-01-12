import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'history-of-computers',
    loadChildren: () => import('./history-of-computers/history-of-computers.module').then( m => m.HistoryOfComputersPageModule)
  },
  {
    path: 'generations-of-computers',
    loadChildren: () => import('./generations-of-computers/generations-of-computers.module').then( m => m.GenerationsOfComputersPageModule)
  },
  {
    path: 'types-of-computer-memory',
    loadChildren: () => import('./types-of-computer-memory/types-of-computer-memory.module').then( m => m.TypesOfComputerMemoryPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
