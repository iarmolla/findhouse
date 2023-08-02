import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { OwnershipService } from '../../services/ownership.service';
import { Ownership } from '../../interfaces/Ownership';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnDestroy, OnInit {
  private map!: mapboxgl.Map;
  private marker!: mapboxgl.Marker;
  private coordinates = {
    lng: (() => {
      const lngFromLocalStorage = window.localStorage.getItem('lng');
      if (lngFromLocalStorage !== null) {
        return parseFloat(lngFromLocalStorage);
      } else {
        return -58.56787140150726;
      }
    })(),
    lat: (() => {
      const latFromLocalStorage = window.localStorage.getItem('lat');
      if (latFromLocalStorage !== null) {
        return parseFloat(latFromLocalStorage);
      } else {
        return -34.60602774598451;
      }
    })()
  };
  private ownership!: Ownership
  constructor(private ownershipService: OwnershipService) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZWRnYXJ2cnAiLCJhIjoiY2xrYWp3NHdnMDZjaDNtbDVqb24xcG9qMCJ9.ClZbhwnv4AujwiO3hq4Taw';
  }
  ngOnInit(): void {
    this.ownershipService._ownership.subscribe((ownership: Ownership) => this.ownership = ownership)
  }
  ngAfterViewInit() {
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  private initializeMap() {
    console.log('entro', this.ownership);
    this.ownership.latitude = this.coordinates.lat
    this.ownership.longitude = this.coordinates.lng
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.coordinates.lng, this.coordinates.lat],
      zoom: 12
    });

    this.map.on('click', (event: any) => {
      this.coordinates = event.lngLat;
      this.ownership.latitude = this.coordinates.lat
      this.ownership.longitude = this.coordinates.lng
      this.ownershipService._ownership.next(this.ownership)
      this.updateMarker();
      console.log(this.ownership);
    });

    // Agregar el marcador inicialmente en una ubicación predeterminada
    this.updateMarker();
  }

  private updateMarker() {
    if (!this.marker) {
      this.marker = new mapboxgl.Marker({ color: 'red', draggable: true });
    }

    this.marker.setLngLat(this.coordinates);

    if (!this.marker.getElement().parentNode) {
      this.marker.addTo(this.map);
    }
  }
}
