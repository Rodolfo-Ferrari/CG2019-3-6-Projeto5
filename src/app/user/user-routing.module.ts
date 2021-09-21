import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'adotar',
    loadChildren: () => import('./adotar/adotar.module').then( m => m.AdotarPageModule)
  },
  {
    path: 'doar',
    loadChildren: () => import('./doar/doar.module').then( m => m.DoarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
