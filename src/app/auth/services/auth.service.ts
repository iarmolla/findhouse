import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/auth/interfaces/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }
  private isLogged: BehaviorSubject<string> = new BehaviorSubject('');
  register(user: User) {
    return this._http.post(`${environment.apiUrl}/user/create`, user)
  }
  login(user: User) {
    return this._http.post(`${environment.apiUrl}/user/login`, user)
  }
  updateUser(user: User) {
    const userId = window.localStorage.getItem('userId')
    return this._http.put(`${environment.apiUrl}/user/user/${userId}`, user)
  }
  getUserById(userId: string) {
    return this._http.get(`${environment.apiUrl}/user/userById/${userId}`)
  }
  get subjectIsLogged(): string {
    const userId = window.localStorage.getItem('userId');
    if(this.isLogged.getValue()) {
      return this.isLogged.getValue()
    }
    else if(userId && userId != null) {
      return userId
    }
    return ''
  }
  set subjectIsLogged(value: string) {
    this.isLogged.next(value)
  }
}
