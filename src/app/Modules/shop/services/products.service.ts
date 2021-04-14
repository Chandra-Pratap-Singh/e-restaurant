import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}
  fetchProducts(filters?: any) {
    const params = filters?.category
      ? new HttpParams().set('category', filters?.category)
      : {};
    return this.http.get(`${this.backendBaseUrl}/products`, {
      params,
    });
  }
  fetchProductCategories() {
    return this.http.get(`${this.backendBaseUrl}/products/categories`);
  }
}
