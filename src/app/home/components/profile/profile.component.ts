import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { errorMessage } from 'src/app/helpers/errors';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm!: FormGroup
  profileImage: string = ''
  errorMessage = errorMessage
  submitted = false
  showToast = {
    successfull: {
      message: 'Guardado exitoso',
      activate: false
    },
    error: {
      message: 'Ocurrio un error al guardar',
      activate: false
    }
  }
  userImage: string = '../../../../assets/images/user.jpg'
  constructor(private authService: AuthService, private router: Router, private imageService: ImageService, private elementRef: ElementRef) {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
      lastname: new FormControl('', [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
      username: new FormControl('', [Validators.pattern('^[A-Za-z0-9]+$'),]),
      email: new FormControl('', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.required]),
      country: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'),]),
      address: new FormControl('', [Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóú\s]+$'),]),
      city: new FormControl('', [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
      description: new FormControl('', [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
      postalCode: new FormControl('', [Validators.pattern(/^\d+$/),]),
      birthDate: new FormControl('', [Validators.pattern(''),]),
      image: new FormControl(window.localStorage.getItem('previousFormData') || '')
    })
    this.authService.getUserById(this.authService.subjectIsLogged).subscribe({
      next: (({ data }: any) => {
        this.profileForm = new FormGroup({
          name: new FormControl(data.name, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
          lastname: new FormControl(data.lastname, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
          username: new FormControl(data.username, [Validators.pattern('^[A-Za-z0-9]+$'),]),
          email: new FormControl(data.email, [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.required]),
          country: new FormControl(data.country, [Validators.pattern('^[a-zA-Z]+$'),]),
          address: new FormControl(data.address, [Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóú\s]+$'),]),
          city: new FormControl(data.city, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
          description: new FormControl(data.description, [Validators.pattern('^(?!^\\s+$)\\s*[A-Za-zÁÉÍÓÚáéíóú\\s]+\\s*$'),]),
          postalCode: new FormControl(data.postalCode, [Validators.pattern(/^\d+$/),]),
          birthDate: new FormControl(data.birthDate, [Validators.pattern(''),]),
          image: new FormControl(data.image)
        })
      }),
      error: ((error) => {

      })
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
        window.localStorage.setItem('previousFormData', this.profileImage)
        const image = this.profileForm.get('image')
        if (image) {
          image.setValue(this.profileImage)
        }
      };
      reader.readAsDataURL(file);
    }
  }
  save() {
    this.submitted = true;
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      this.authService.updateUser(this.profileForm.value).subscribe({
        next: ((data) => {
          document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
          console.log(data);
          if (this.profileImage) {
            this.imageService.imageSubject = this.profileImage
          }
          this.showToast.successfull.activate = true
          setTimeout(() => {
            this.showToast.successfull.activate = false
          }, 2000)
        }),
        error: ((error) => {
          this.showToast.error.activate = true
          setTimeout(() => {
            this.showToast.error.activate = false
          }, 2000)
        })
      })
      console.log('es valido');
    }
  }
  exit() {
    this.router.navigate([''])
  }
}
