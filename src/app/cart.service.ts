import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClinet: HttpClient) { }

  addToCart(pid: string, userToken: any): Observable<any> {
    return this._HttpClinet.post('https://ecommerce.routemisr.com/api/v1/cart', { productid: pid }, {
      headers: {
        token: userToken
      }
    })
  }
  getCart(userToken: any): Observable<any> {
    return this._HttpClinet.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token: userToken
      }
    })

  }
}
