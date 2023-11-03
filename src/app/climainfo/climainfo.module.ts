import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimainfoPageRoutingModule } from './climainfo-routing.module';

import { ClimainfoPage } from './climainfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimainfoPageRoutingModule
  ],
  declarations: [ClimainfoPage]
})
export class ClimainfoPageModule {}
