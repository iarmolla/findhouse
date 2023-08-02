import { Component } from '@angular/core';
import { OwnershipService } from '../../services/ownership.service';
import { TypeOfHouse } from '../../interfaces/Ownership';


@Component({
  selector: 'app-property-register-accommodation',
  templateUrl: './property-register-accommodation.component.html',
  styleUrls: ['./property-register-accommodation.component.css']
})
export class PropertyRegisterAccommodationComponent {
  accommodationSvg: string = '../../../assets/svg/accommodation.svg'
  houseSvg: string = '../../../assets/svg/house.svg'
  ownership: any
  typeOfHouse: any
  constructor(private ownershipService: OwnershipService) {
    ownershipService._typeOfHouse.subscribe((data) => {
      this.typeOfHouse = data
    })
    ownershipService._ownership.subscribe((data) => {
      this.ownership = data
    })
  }
  activate(value: any) {
    console.log(value);
    this.typeOfHouse.forEach((data: any) => {
      data.activate = false
    })
    this.ownership.house_type = TypeOfHouse[value.type]
    this.ownershipService._typeOfHouse.next(this.typeOfHouse)
    this.ownershipService._ownership.next(this.ownership)
    value.activate = true
  }
}
