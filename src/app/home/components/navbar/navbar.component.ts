import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../interfaces/User';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged: string
  showOptions: boolean = false
  title: string = 'FINDHOUS'
  userData!: User
  profileImage$!: string
  constructor(private authService: AuthService, private imageService: ImageService) {
    this.imageService.imageSubject.subscribe((data) => this.profileImage$ = data)
    this.isLogged = this.authService.subjectIsLogged
    console.log(this.profileImage$);
  }
  options() {
    this.showOptions = !this.showOptions
  }
  logout() {
    window.localStorage.removeItem('userId')
    window.location.reload()
  }
}
