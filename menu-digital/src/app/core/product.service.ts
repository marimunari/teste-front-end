import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);  
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
