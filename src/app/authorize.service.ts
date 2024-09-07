import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { Member } from './member';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private _HttpClinet: HttpClient) {

    afterNextRender(() => {
      if (localStorage.getItem('token') !== null) {
        this.isLogin.next(true)
      }
      else {
        this.isLogin.next(false)
      }
    })
  }


  login(cred: Member): Observable<any> {

    return this._HttpClinet.post('https://ecommerce.routemisr.com/api/v1/auth/signin', cred);


  }
}



function onNextRender() {
  throw new Error('Function not implemented.');
}

