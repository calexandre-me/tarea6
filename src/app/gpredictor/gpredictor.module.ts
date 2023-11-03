import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpredictorPageRoutingModule } from './gpredictor-routing.module';

import { GpredictorPage } from './gpredictor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpredictorPageRoutingModule
  ],
  declarations: [GpredictorPage]
})
export class GpredictorPageModule {}
