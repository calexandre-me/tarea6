import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'gpredictor',
    loadChildren: () => import('./gpredictor/gpredictor.module').then( m => m.GpredictorPageModule)
  },
  {
    path: 'epredictor',
    loadChildren: () => import('./epredictor/epredictor.module').then( m => m.EpredictorPageModule)
  },
  {
    path: 'buniversidad',
    loadChildren: () => import('./buniversidad/buniversidad.module').then( m => m.BuniversidadPageModule)
  },
  {
    path: 'climainfo',
    loadChildren: () => import('./climainfo/climainfo.module').then( m => m.ClimainfoPageModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./wordpress/wordpress.module').then( m => m.WordpressPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
