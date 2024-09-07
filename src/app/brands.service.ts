import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClinet: HttpClient) { }

  getAllBrands(): Observable<any> {
    return this._HttpClinet.get('https://ecommerce.routemisr.com/api/v1/brands')

  }
}
