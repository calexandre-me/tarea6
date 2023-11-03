import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuniversidadPage } from './buniversidad.page';

const routes: Routes = [
  {
    path: '',
    component: BuniversidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuniversidadPageRoutingModule {}
