import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpredictorPage } from './gpredictor.page';

const routes: Routes = [
  {
    path: '',
    component: GpredictorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpredictorPageRoutingModule {}
