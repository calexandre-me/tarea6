import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimainfoPage } from './climainfo.page';

const routes: Routes = [
  {
    path: '',
    component: ClimainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimainfoPageRoutingModule {}
