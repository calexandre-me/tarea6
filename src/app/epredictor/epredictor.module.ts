import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpredictorPageRoutingModule } from './epredictor-routing.module';

import { EpredictorPage } from './epredictor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpredictorPageRoutingModule
  ],
  declarations: [EpredictorPage]
})
export class EpredictorPageModule {}
