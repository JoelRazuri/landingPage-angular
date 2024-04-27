import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://fakestoreapi.com/products';
  private _apiService  = inject(HttpClient);


  getAllProducts(): Observable<IProduct[]> {
    return this._apiService.get<IProduct[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    return this._apiService.get<IProduct>(`${this.baseUrl}/${id}`);
  }
}
