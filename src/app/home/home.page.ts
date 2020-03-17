import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { loadModules, loadCss } from 'esri-loader';
import { ModalController } from '@ionic/angular';
import { BasemapModalPage } from '../basemap-modal/basemap-modal.page'
import esri = __esri;
import { LayerListModalPage } from '../layer-list-modal/layer-list-modal.page';
import { LegendModalPage } from '../legend-modal/legend-modal.page';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private platform:Platform, public modalController:ModalController, public shared:SharedService){}
  view:esri.MapView = null;
  @ViewChild('map', null) mapEl: ElementRef;
  shops = [];
  parking =[];
  greenways = [];  
  async getGeo() {
    await this.platform.ready();
    loadCss('https://js.arcgis.com/4.14/esri/themes/dark/main.css');   
    const [WebMap, MapView]:any = await loadModules(['esri/WebMap', 'esri/views/MapView'])
    .catch(err => { console.error("ArcGIS: ", err)});
        let map = new WebMap({portalItem: {
          id: '3ca6fb4a66394fd58638905abba6d621'
        }});
        this.view = new MapView({
          container: this.mapEl.nativeElement,
          map: map
        });
        this.view.popup.dockEnabled = true;
        this.view.popup.dockOptions =  {
          position: 'bottom-center',
          buttonEnabled: false,
          breakpoint: false
        }; 
        this.view.popup.collapseEnabled = false;
        this.view.ui.remove('zoom');

        this.view.when(() => {
          this.shared.view = this.view;
          this.loadTrackingWidget(this.view);
          this.loadSearchWidget(this.view);
          this.loadCompassWidget(this.view);
        });
  }
  getHeading(point, oldPoint) {
    // get angle between two points
    var angleInDegrees =
      (Math.atan2(point.y - oldPoint.y, point.x - oldPoint.x) * 180) /
      Math.PI;

    // move heading north
    return -90 + angleInDegrees;
  }  
  async loadTrackingWidget(view) {
    const [Track]:any = await loadModules(['esri/widgets/Track'])
    .catch(err => { console.error("ArcGIS: ", err)});
        const track = new Track({
          view: view,
          geolocationOptions: {
            maximumAge: 0,
            timeout: 15000,
            enableHighAccuracy: true
          }
        });   
        view.ui.add(track, {
          position: "bottom-left"
        });
  }
  async loadCompassWidget(view) {
    const [Compass]:any = await loadModules(['esri/widgets/Compass'])
    .catch(err => { console.error("ArcGIS: ", err)});
        const track = new Compass({
          view: view
        });   
        view.ui.add(track, {
          position: "bottom-left"
        });
  }  
  async loadSearchWidget(view) {
    const [Search, Expand]:any = await loadModules(['esri/widgets/Search','esri/widgets/Expand'])
    .catch(err => { console.error("ArcGIS: ", err)});
        const search = new Search({
          view: view
        });   
        const expand = new Expand({
          expandIconClass: 'esri-icon-search',
          view: view,
          content: search,
          mode: 'floating'
        });
        view.ui.add(expand, {
          position: "top-left"
        });    
  }
  async presentBasemapModal() {
    const modal = await this.modalController.create({
      component: BasemapModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        view: this.view
      }
    });
    return await modal.present();
  }

  async presentLayerListModal() {
    const modal = await this.modalController.create({
      component: LayerListModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        view: this.view
      }
    });
    return await modal.present();
  }

  async presentLegendModal() {
    const modal = await this.modalController.create({
      component: LegendModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        view: this.view
      }
    });
    return await modal.present();
  }

  
 

  ngOnInit() {
    this.getGeo();
  }
}
