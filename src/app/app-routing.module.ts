import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'basemap-modal', loadChildren: './basemap-modal/basemap-modal.module#BasemapModalPageModule' },
  { path: 'layer-list-modal', loadChildren: './layer-list-modal/layer-list-modal.module#LayerListModalPageModule' },
  { path: 'legend-modal', loadChildren: './legend-modal/legend-modal.module#LegendModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
