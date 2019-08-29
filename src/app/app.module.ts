import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasemapModalPage } from './basemap-modal/basemap-modal.page';
import { BasemapModalPageModule } from './basemap-modal/basemap-modal.module';
import { LayerListModalPageModule } from './layer-list-modal/layer-list-modal.module';
import { LayerListModalPage } from './layer-list-modal/layer-list-modal.page';
import { LegendModalPageModule } from './legend-modal/legend-modal.module';
import { LegendModalPage } from './legend-modal/legend-modal.page';
import { NearbyListComponent } from './nearby-list/nearby-list.component';



@NgModule({
  declarations: [AppComponent, NearbyListComponent],
  entryComponents: [BasemapModalPage, LayerListModalPage, LegendModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BasemapModalPageModule, LayerListModalPageModule, LegendModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
