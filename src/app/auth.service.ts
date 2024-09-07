import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }


  signUp(userData: User): Observable<any> {

    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData)

  }
}



