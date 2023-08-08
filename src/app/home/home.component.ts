import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  properties!: Object[]
  img = '../../assets/images/f.PNG'
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.homeService.getAllHome().subscribe(({ data }: any) => {
      this.properties = data
      this.properties.map((property: any) => {
        this.homeService.getPictureOwnership(property.id).subscribe(({ data }: any) => {
          if (property.id == data.ownershipId) {
            property.image = data.images[0]
            // property.image = 'https://cdn.tecnogestion.com.ar/multimedia/MAP/MAP/MAP0243/MAP0243_001.jpg?3198697'
            console.log(this.properties);
          }
        })
      })
    })
  }
}
