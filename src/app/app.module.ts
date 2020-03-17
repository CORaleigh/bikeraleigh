import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasemapModalPage } from './basemap-modal/basemap-modal.page';
import { BasemapModalPageModule } from './basemap-modal/basemap-modal.module';
import { LayerListModalPageModule } from './layer-list-modal/layer-list-modal.module';
import { LayerListModalPage } from './layer-list-modal/layer-list-modal.page';
import { LegendModalPageModule } from './legend-modal/legend-modal.module';
import { LegendModalPage } from './legend-modal/legend-modal.page';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [BasemapModalPage, LayerListModalPage, LegendModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BasemapModalPageModule, LayerListModalPageModule, LegendModalPageModule],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
