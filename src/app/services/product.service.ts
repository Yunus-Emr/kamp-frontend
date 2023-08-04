import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:7204/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModule<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModule<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
}
