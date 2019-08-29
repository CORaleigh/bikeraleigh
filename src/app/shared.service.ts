import { Injectable } from '@angular/core';
import esri = __esri;
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  view:esri.MapView;
}
