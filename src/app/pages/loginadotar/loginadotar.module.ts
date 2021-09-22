import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginadotarPageRoutingModule } from './loginadotar-routing.module';

import { LoginadotarPage } from './loginadotar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginadotarPageRoutingModule
  ],
  declarations: [LoginadotarPage]
})
export class LoginadotarPageModule {}
