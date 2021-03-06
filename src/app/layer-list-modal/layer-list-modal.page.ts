import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-layer-list-modal',
  templateUrl: './layer-list-modal.page.html',
  styleUrls: ['./layer-list-modal.page.scss'],
})
export class LayerListModalPage implements OnInit, OnDestroy {
  layerlist = null;
  constructor(public modalController:ModalController, public navParams: NavParams) { }
  @ViewChild('layers', null) layersEl: ElementRef;

  dismiss() {
    this.modalController.dismiss();
  }
  async getGeo() {
    const [LayerList]:any = await loadModules(['esri/widgets/LayerList'])
    .catch(err => { console.error("ArcGIS: ", err)});
       this.layerlist = new LayerList({
          container: this.layersEl.nativeElement,
          view: this.navParams.get('view')
        })
  }

  ngOnInit() {
    this.getGeo();
  }

  ngOnDestroy() {
    this.layerlist.destroy();
    this.layerlist = null;
  }

}
