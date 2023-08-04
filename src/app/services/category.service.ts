import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:7204/api/categories/getall';

  constructor(private httpclient: HttpClient) {}

  getCategories(): Observable<ListResponseModule<Category>> {
    return this.httpclient.get<ListResponseModule<Category>>(this.apiUrl);
  }
}
