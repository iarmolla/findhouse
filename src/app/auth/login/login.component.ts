import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessage } from 'src/app/helpers/errors';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  errorMessage = errorMessage
  showError: string = ''
  submitted = false;
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.required]),
      password: new FormControl('', Validators.required),
    })
  }
  get f() { return this.loginForm.controls }
  login(): void {
    this.submitted = true
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: ({ data }: any) => {
          window.localStorage.setItem('userId', data)
          this.authService.subjectIsLogged = data
          this.router.navigate(['/'])
        },
        error: (error) => {
          this.showError = this.errorMessage.signin
          this.authService.subjectIsLogged = ''
          setTimeout(() => {
            this.showError = ''
          }, 3000)
          // this._snackBar.open(this.errorMessage.error, 'Aceptar', {
          //   duration: 5000,
          //   verticalPosition: 'top',
          //   panelClass: ['error-snackbar']
          // });
        }
      })
    }
  }
}
