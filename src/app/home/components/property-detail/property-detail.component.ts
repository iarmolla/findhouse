import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit {
  ownership!:any
  userImage: string = '../../../../assets/images/user.png'
  images!: string[]
  imagesAux = ['https://sm.ign.com/t/ign_es/screenshot/default/top10darksoulsbosses1280-1539970285459_m5v4.1280.jpg', 'https://i.ytimg.com/vi/S2mEBYDDKaI/maxresdefault.jpg', 'https://assets1.ignimgs.com/thumbs/userUploaded/2016/4/7/every-boss-thumb-1460050305472.jpg', 'https://whatifgaming.com/wp-content/uploads/2023/01/1674921439367-1024x576.jpg', 'https://assetsio.reedpopcdn.com/dark_souls_3_yhorm_the_giant.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp']
  constructor(private router: Router, private homeService: HomeService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data): any => {
      this.ownership = data
      console.log(data);
      this.homeService.getPictureOwnership(this.ownership.id).subscribe(({data}: any) => {
        this.images = data.images
      })
      // this.homeService.getOwnershipById(id).subscribe((data) => console.log(data))
    })
  }
}
