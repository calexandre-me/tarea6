import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuniversidadPageRoutingModule } from './buniversidad-routing.module';

import { BuniversidadPage } from './buniversidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuniversidadPageRoutingModule
  ],
  declarations: [BuniversidadPage]
})
export class BuniversidadPageModule {}
