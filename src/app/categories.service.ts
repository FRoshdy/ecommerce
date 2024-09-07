import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClinet: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this._HttpClinet.get('https://ecommerce.routemisr.com/api/v1/categories')

  }
}
