import { Component } from '@angular/core';
import { OwnershipService } from '../../services/ownership.service';
import { Ownership } from '../../interfaces/Ownership';



@Component({
  selector: 'app-property-register-images',
  templateUrl: './property-register-images.component.html',
  styleUrls: ['./property-register-images.component.css']
})

export class PropertyRegisterImagesComponent {
  images: string[] = []
  names: any = []
  selectedImages: any = [];
  ownership!: Ownership
  constructor(private ownershipService: OwnershipService) {
    ownershipService._ownership.subscribe((data: Ownership) => {
      this.ownership = data     
      if('images' in data) {
        this.images = data.images
      }
    })
  }
  onFileChange() {
    this.names = []
  
    const filemultiple: any = document.querySelector("#dropzone-file");
    const formData = new FormData();
    for (let i = 0; i < filemultiple.files.length; i++) {
      let image = filemultiple.files[i].name
      this.names.push(image)
      formData.append("files", filemultiple.files[i]);
    }
    const id = window.localStorage.getItem('ownershipId')
    if(id) {
      this.ownership.userId = id
    }
    this.ownership.images = formData
    this.ownershipService._ownership.next(this.ownership)
  }
  removeImage(image: string) {
    const newImages = this.images.filter((value: string) => value != image)
    this.images = newImages
    this.ownership.images = this.images
    this.ownershipService._ownership.next(this.ownership)
  }
}
