import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fmember } from './fmember';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private _HttpClinet: HttpClient) {



  }

  forgotPass(fmem: Fmember): Observable<any> {

    return this._HttpClinet.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', fmem)

  }
}


