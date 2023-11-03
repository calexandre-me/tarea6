import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpredictorPage } from './epredictor.page';

const routes: Routes = [
  {
    path: '',
    component: EpredictorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpredictorPageRoutingModule {}
