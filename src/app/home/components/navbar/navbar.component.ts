import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged: any
  showOptions: boolean = false
  title: string = 'FINDHOUS'
  constructor(private authService: AuthService) {
   this.isLogged = this.authService.subjectIsLogged 
  }
  options() {
    this.showOptions = !this.showOptions
  }
  logout() {
    window.localStorage.removeItem('userId')
    window.location.reload()
  }
}
