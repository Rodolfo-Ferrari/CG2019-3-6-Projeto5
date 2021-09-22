import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginadotarPage } from './loginadotar.page';

const routes: Routes = [
  {
    path: '',
    component: LoginadotarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginadotarPageRoutingModule {}
