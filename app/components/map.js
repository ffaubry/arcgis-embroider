import Component from '@glimmer/component';
import { action } from '@ember/object';
import config from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

config.baseUrl = '/arcgis-embroider/';

export default class MapComponent extends Component {

  @action
  initializeMap(element){
    this.map = new Map({
      basemap: "topo-vector"
    });

    this.view = new MapView({
      container: element,
      map: this.map,
      center: [-118.71511,34.09042],
      zoom: 11
    });
  }
}
