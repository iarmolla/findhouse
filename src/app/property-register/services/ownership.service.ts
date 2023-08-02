import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ownership, TypeOfHouse } from '../interfaces/Ownership';
import { CSSIcons, Service } from '../interfaces/Service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnershipService {
  ownership: Ownership = {
    userId: '',
    ownershipId: '',
    createAt: null,
    modifiedAt: null,
    country: '',
    state: '',
    city: '',
    address: '',
    images: [],
    house_type: TypeOfHouse.APARTMENT,
    rooms: 1,
    bathrooms: 1,
    house_area: 1,
    description: '',
    price: 1,
    deposit: 0,
    payment_conditions: '',
    additional_services: [],
    additional_fees: [],
    policies_cancellation: '30-day notice required',
    latitude: 0,
    longitude: 0,
    pets_allowed: false,
    smoking_policy: '',
    available_date: 0,
  }
  services: Service[] = [
    {
      title: 'Comida',
      icon: CSSIcons.UTENSILS,
      activate: false
    },
    {
      title: 'Piscina',
      icon: CSSIcons.WATER_LADDER,
      activate: false
    },
    {
      title: 'Internet',
      icon:  CSSIcons.WIFI,
      activate: false
    },
    {
      title: 'Mascotas',
      icon: CSSIcons.SHIELD_DOG,
      activate: false
    },
    {
      title: 'No fumar',
      icon: CSSIcons.BAN_SMOKING,
      activate: false
    },
    {
      title: 'Estacionamiento',
      icon: CSSIcons.CAR_SIDE,
      activate: false
    },
    {
      title: 'Gym',
      icon:  CSSIcons.DUMBBELL,
      activate: false
    }
  ]
  types = [
    {
      type: TypeOfHouse.HOUSE,
      title: 'Casa',
      description: 'Los huespedes disponen del alojamiento entero para ellos',
      activate: false
    },
    {
      type: TypeOfHouse.CABIN,
      title: 'Cabaña',
      description: 'Los huespedes disponen del alojamiento entero para ellos',
      activate: false
    },
    {
      type: TypeOfHouse.APARTMENT,
      title: 'Departamento',
      description: 'Los huespedes disponen del alojamiento entero para ellos',
      activate: false
    }
  ]
  userId: string = window.localStorage.getItem('userId') || ''
  constructor(private _http: HttpClient) {}
  public _typeOfHouse: BehaviorSubject<any> = new BehaviorSubject<any>(this.types);
  public _ownership: BehaviorSubject<Ownership> = new BehaviorSubject<Ownership>(this.ownership);

  register(ownership: Ownership) {
    ownership.userId = this.userId
    if(ownership.additional_services && ownership.additional_services.length > 0) {
      const filter: any = ownership.additional_services.map((service: Service) => service?.title)
      console.log(ownership);
      ownership.additional_services = filter
    }
    const clonedObject = { ...ownership };
    delete clonedObject.images;
    return this._http.post(`${environment.apiUrl}/ownership/create`, clonedObject)
  }
  registerProperty(ownership: Ownership) {
    const ownershipId = window.localStorage.getItem('ownershipId')
    return this._http.post(`${environment.apiUrl}/files/uploads/${ownershipId}`, ownership.images)
  }
}
