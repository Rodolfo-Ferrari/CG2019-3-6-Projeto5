import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogindoarPage } from './logindoar.page';

const routes: Routes = [
  {
    path: '',
    component: LogindoarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogindoarPageRoutingModule {}
