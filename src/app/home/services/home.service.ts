import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private _http: HttpClient) { }

  getHomesByCountry(country: string) {
    return this._http.get(`${environment.apiUrl}/ownership/listAllOwnershipByCountry/${country}`)
  }

  getAllHome() {
    return this._http.get(`${environment.apiUrl}/ownership/listAll`)
  }

  getOwnershipById(id: string) {
    return this._http.get(`${environment.apiUrl}/ownership/${id}`)
  }

  getPictureOwnership(id: string) {
    return this._http.get(`${environment.apiUrl}/images/ownership/${id}`)
  }
}