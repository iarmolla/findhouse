import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() property: any
  constructor(private router: Router) { }
  propertyDetail() {
    if(this.property.userId.image == null) {
      this.property.userId.image = "hola"
    }
    console.log(      this.property.userId.image 
    );
    this.router.navigate([`property-detail`], {
      queryParams: {
        id: this.property.id,
        country: this.property.country,
        name: this.property.userId.name,
        email: this.property.userId.email,
        city: this.property.city,
        bathrooms: this.property.bathrooms,
        rooms: this.property.rooms,
        pets_allowed: this.property.pets_allowed,
        description: this.property.description,
        image: this.property.userId.image
      }
    })
  }
}
