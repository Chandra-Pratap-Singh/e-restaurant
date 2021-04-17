import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}
  fetchProducts(filters?: any, pageNumber?: number, pageLimit?: number) {
    const params: {
      pageNumber?: string;
      pageLimit?: string;
      category?: string;
    } = {};
    if (filters?.categories) params.category = filters?.category;
    if (pageNumber) params.pageNumber = `${pageNumber}`;
    if (pageLimit) params.pageLimit = `${pageLimit}`;
    return this.http.get(`${this.backendBaseUrl}/products`, {
      params,
    });
  }
  fetchProductCategories() {
    return this.http.get(`${this.backendBaseUrl}/products/categories`);
  }
}
