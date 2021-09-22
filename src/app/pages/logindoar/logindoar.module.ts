import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindoarPageRoutingModule } from './logindoar-routing.module';

import { LogindoarPage } from './logindoar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogindoarPageRoutingModule
  ],
  declarations: [LogindoarPage]
})
export class LogindoarPageModule {}
