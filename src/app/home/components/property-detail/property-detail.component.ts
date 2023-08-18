import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
})
export class PropertyDetailComponent implements OnInit {
  ownership!: any
  userImage: string = ''
  images!: string[]
  constructor(private router: Router, private homeService: HomeService, private activatedRoute: ActivatedRoute, private imageService: ImageService) { }
  ngOnInit() {
    this.userImage = this.imageService.userImage
    this.activatedRoute.queryParams.subscribe((data): any => {
      this.ownership = data
      console.log(data);
      this.homeService.getPictureOwnership(this.ownership.id).subscribe(({ data }: any) => {
        this.images = data.images
        console.log(this.images);
      })
      // this.homeService.getOwnershipById(id).subscribe((data) => console.log(data))
    })
  }
}
