import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import esri = __esri;
import { loadModules, loadCss } from 'esri-loader';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  listitems:esri.Graphic[] = [];
  activeSegment = {'layer': 'Bicycle Shops', 'fields': ['Label']};
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public shared: SharedService,
    public menu: MenuController
  ) {
    this.initializeApp();
  }

  segmentChanged(event) {
    this.listitems = [];

    this.getList(event.detail.value)
    this.activeSegment = event.detail.value;
  }

  zoomTo(item) {
    this.menu.close();
    this.shared.view.goTo({target:item, scale: 4000});
  }

  async getList(value) {
    if (this.shared.view) {
      const [Query, geometryEngine]:any = await loadModules(['esri/tasks/support/Query', 'esri/geometry/geometryEngine'])
      .catch(err => { console.error("ArcGIS: ", err)});
      let matches = this.shared.view.map.layers.filter(layer => {return layer.title === value.layer;});
      if (matches.length) {
        let layer = matches.getItemAt(0) as esri.FeatureLayer;
        let query:esri.Query = new Query();
        query.where = "1=1";
        const buffer:esri.Polygon = geometryEngine.buffer(this.shared.view.center, 5, 'miles');
        query.geometry = buffer;
        query.outFields = value.fields;
        query.outSpatialReference = this.shared.view.spatialReference;
        query.returnGeometry = true;
        layer.queryFeatures(query).then(response => {
          response.features.forEach(feature => {
            const distance = geometryEngine.distance(this.shared.view.center, feature.geometry, 'miles');
            feature.attributes.distance = distance;
          });
          response.features.sort((a,b) => {
            return a.attributes.distance - b.attributes.distance;
          });
          this.listitems = response.features;
        });
    }
    }
  }

  menuOpened(event) {
    this.listitems = [];
    this.getList(this.activeSegment);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#78AA00");
    });
  }

  ionDidOpen
}
