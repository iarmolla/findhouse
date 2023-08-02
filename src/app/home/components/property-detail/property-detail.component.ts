import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  ownership!:any
  images: any
  constructor(private router: Router, private homeService: HomeService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data): any => {
      this.ownership = data
      console.log(data);
      this.homeService.getPictureOwnership(this.ownership.id).subscribe(({data}: any) => {
        this.images = data.images
        console.log(data);
      })
      // this.homeService.getOwnershipById(id).subscribe((data) => console.log(data))
    })
  }
}
