import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdotarPage } from './adotar.page';

const routes: Routes = [
  {
    path: '',
    component: AdotarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdotarPageRoutingModule {}
