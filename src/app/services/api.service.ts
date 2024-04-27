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

  createProduct(product: IProduct): Observable<IProduct> {
    return this._apiService.post<IProduct>(this.baseUrl, product);
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._apiService.put<IProduct>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this._apiService.delete<IProduct>(`${this.baseUrl}/${id}`);
  }
  
}
