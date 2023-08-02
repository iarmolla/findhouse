import { Component, OnDestroy } from '@angular/core';
import { OwnershipService } from '../../services/ownership.service';
import { Ownership } from '../../interfaces/Ownership';
import { CSSIcons, Service } from '../../interfaces/Service';


@Component({
  selector: 'app-property-register-services',
  templateUrl: './property-register-services.component.html',
  styleUrls: ['./property-register-services.component.css']
})
export class PropertyRegisterServicesComponent  implements OnDestroy{
  services: Service[]
  ownership!: any 

  constructor(private ownershipService: OwnershipService) {
    this.services = this.ownershipService.services
    ownershipService._ownership.subscribe((data) => {
      this.ownership = data
    })
  }
  ngOnDestroy(): void {
    console.log('on destroy gg');
    this.ownership.services = this.ownershipService.services
    console.log(this.ownership);
    this.ownershipService._typeOfHouse.next(this.ownershipService.types)
    this.ownershipService._ownership.next(this.ownership)
    
  }
  activate(service: Service) {
    service.activate = !service.activate
    let smoking_policy
    let pets_allowed = false
    const filteredIcons = this.services.filter((service: Service) => {
      if (service.icon === CSSIcons.BAN_SMOKING && service.activate) {
        smoking_policy = 'No smoking'
      } else if (service.icon === CSSIcons.BAN_SMOKING && !service.activate) {
        smoking_policy = 'allow'
      }
      if (service.icon === CSSIcons.SHIELD_DOG && service.activate) {
        pets_allowed = true
      } else if (service.icon === CSSIcons.SHIELD_DOG && !service.activate) {
        pets_allowed = false
      }
      if (service.activate && service.icon !== CSSIcons.BAN_SMOKING && service.icon !== CSSIcons.SHIELD_DOG) {
        return service
      }
      return
    })
    if (smoking_policy) {
      this.ownership.smoking_policy = smoking_policy
    }
    if (pets_allowed != null) {
      this.ownership.pets_allowed = pets_allowed
    }
    this.ownership.additional_services = filteredIcons
    this.ownershipService._ownership.next(this.ownership)
    console.log(this.ownership);
  }
}
