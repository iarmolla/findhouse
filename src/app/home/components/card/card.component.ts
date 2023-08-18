import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() property: any
  userImage: string = ''
  constructor(private router: Router, private imageService: ImageService) { }
  ngOnInit(): void {
    this.userImage = this.imageService.userImage
  }
  propertyDetail(): void {
    if (this.property.userId.image == null) {
      this.property.userId.image = ""
    }
    console.log(this.property.userId);
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
