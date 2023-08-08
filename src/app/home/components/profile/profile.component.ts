import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../interfaces/User';
import { errorMessage } from 'src/app/helpers/errors';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm: FormGroup
  userData!: User
  profileImage: string = ''
  errorMessage = errorMessage
  submitted = false
  userImage: string = '../../../../assets/images/user.jpg'
  constructor(private authService: AuthService, private router: Router, private imageService: ImageService) {
    const user = window.localStorage.getItem('previousFormData')
    if (user) {
      this.userData = JSON.parse(user)
      this.profileImage = this.userData.image
    }
    this.profileForm = new FormGroup({
      name: new FormControl(this.userData.name, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'), Validators.required]),
      lastname: new FormControl(this.userData.lastname, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'), Validators.required]),
      username: new FormControl(this.userData.username, [Validators.pattern('^[A-Za-z0-9]+$'), Validators.required]),
      email: new FormControl(this.userData.email, [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.required]),
      country: new FormControl(this.userData.country, [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
      address: new FormControl(this.userData.address, [Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóú\s]+$'), Validators.required]),
      city: new FormControl(this.userData.city, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'), Validators.required]),
      description: new FormControl(this.userData.description, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'), Validators.required]),
      postalCode: new FormControl(this.userData.postalCode, [Validators.pattern(/^\d+$/), Validators.required]),
      birthDate: new FormControl(this.userData.birthDate, [Validators.pattern(''), Validators.required]),
      image: new FormControl(this.userData.image, [Validators.required])
    })
  }
  get f() {
    return this.profileForm.controls
  }
  setImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  save() {
    this.submitted = true;
    console.log(this.profileForm.value);
    const image = this.profileForm.get('image')
    if (image) {
      image.setValue(this.profileImage)
    }
    if (this.profileForm.valid) {    
      this.authService.updateUser(this.profileForm.value).subscribe({
        next: ((data) => {
          console.log(data);
          this.imageService.imageSubject = this.profileImage
          window.localStorage.setItem('previousFormData', JSON.stringify(this.profileForm.value));
        }),
        error: ((error) => console.log(error))
      })
      console.log('es valido');
    }
  }
  exit() {
    this.router.navigate([''])
  }
}
