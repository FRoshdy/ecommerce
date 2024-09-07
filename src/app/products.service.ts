import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClinet: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._HttpClinet.get('https://ecommerce.routemisr.com/api/v1/products')

  }

  getSpecificProduct(id: any): Observable<any> {
    return this._HttpClinet.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }
}
