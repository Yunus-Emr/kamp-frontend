import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModule } from '../models/productResponseModule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:7204/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductResponseModule> {
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}
