import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdotarPageRoutingModule } from './adotar-routing.module';

import { AdotarPage } from './adotar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdotarPageRoutingModule
  ],
  declarations: [AdotarPage]
})
export class AdotarPageModule {}
