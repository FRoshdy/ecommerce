import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorizeService } from '../authorize.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _AuthorizeService: AuthorizeService, private _Router: Router) { }
  signIn = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })



  backendMsg = null;


  loading = false;
  login(form: any) {

    if (form.valid) {
      this.loading = true
      this._AuthorizeService.login(form.value).subscribe({
        next: (response) => {

          this._Router.navigate(['/home']

          )
          this._AuthorizeService.isLogin.next(true);
          this.loading = false
          let token = response.token
          localStorage.setItem('token', token)

          let decodedCode = jwtDecode(token)
          console.log(decodedCode)
        },
        error: (err) => {
          this.backendMsg = err.error.message
          this.loading = false;
          console.log(err)
        }
      }

      )
    }
    else {
      console.log(form)
    }
  }
}


