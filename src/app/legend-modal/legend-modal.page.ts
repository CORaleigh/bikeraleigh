import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { loadModules } from 'esri-loader';


@Component({
  selector: 'app-legend-modal',
  templateUrl: './legend-modal.page.html',
  styleUrls: ['./legend-modal.page.scss'],
})
export class LegendModalPage implements OnInit {


  constructor(public modalController:ModalController, public navParams: NavParams) { }
  @ViewChild('legend', null) layersEl: ElementRef;

  dismiss() {
    this.modalController.dismiss();
  }
  async getGeo() {
    const [Legend]:any = await loadModules(['esri/widgets/Legend'])
    .catch(err => { console.error("ArcGIS: ", err)});
        const gallery= new Legend({
          container: this.layersEl.nativeElement,
          view: this.navParams.get('view')
        })
  }

  ngOnInit() {
    this.getGeo();
  }

}
