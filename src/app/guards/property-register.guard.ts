import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyRegisterGuard implements CanActivate {
  constructor(private router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = window.localStorage.getItem('userId')
    console.log(isAuthenticated);
    if(isAuthenticated) {
        return true
    } else {
      this.router.navigate(['/'])
      return false
    }
  }
  
}
