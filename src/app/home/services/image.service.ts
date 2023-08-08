import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private image: BehaviorSubject<string> = new BehaviorSubject('')
  profileImage: string = '';
  /**
   *
   */
  constructor() {
    const user = window.localStorage.getItem('previousFormData')
    if (user) {
      let data = JSON.parse(user)
      this.profileImage = data.image
      this.imageSubject = this.profileImage
    }
  }
  get imageSubject(): Observable<string> {
    return this.image.asObservable();
  }

  set imageSubject(value: string) {
    window.localStorage.setItem('profileImage', value)
    this.image.next(value);
  }
}
