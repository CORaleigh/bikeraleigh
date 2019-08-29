import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { loadModules, loadCss } from 'esri-loader';

@Component({
  selector: 'app-basemap-modal',
  templateUrl: './basemap-modal.page.html',
  styleUrls: ['./basemap-modal.page.scss'],
})
export class BasemapModalPage implements OnInit {

  constructor(public modalController:ModalController, public navParams: NavParams) { }
  @ViewChild('basemaps', null) basemapsEl: ElementRef;

  dismiss() {
    this.modalController.dismiss();
  }
  async getGeo() {
    const [BasemapGallery]:any = await loadModules(['esri/widgets/BasemapGallery'])
    .catch(err => { console.error("ArcGIS: ", err)});
        const gallery= new BasemapGallery({
          container: this.basemapsEl.nativeElement,
          view: this.navParams.get('view')
        })
  }

  ngOnInit() {
    this.getGeo();
  }

}
