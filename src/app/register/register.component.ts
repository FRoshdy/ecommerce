import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService, private _Router:Router) { }

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    rePassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    phone: new FormControl(null, [Validators.required]),
  }, this.confirmPassword)

  backendMsg = null;


  loading = false;
  register(form: any) {
    this.loading = true;
    if (form.valid) {
      this._AuthService.signUp(form.value).subscribe({
        next: (response) => {
          console.log(response)
          this._Router.navigate(['/login'])
          this.loading = false;
        },
        error: (err) => {
          console.log(err)
          this.backendMsg = err.error.message
          this.loading = false;
        }
      }

      )
    }
    else { console.log(form) }

  }
  confirmPassword(form: any) {

    if (form.get('password').value !== form.get('rePassword').value) {
      return { didnotMatch: true }
    }
    else {
      return null
    }
  }
}
