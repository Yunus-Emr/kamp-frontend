import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/ListResponseModule';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:7204/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModule<Product>> {
    return this.httpClient.get<ListResponseModule<Product>>(this.apiUrl);
  }
}
