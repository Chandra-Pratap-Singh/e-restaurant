import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IadminOrder } from '../modal/interfaces/IadminOrder.interface';
import { pageLimit } from '../../../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}

  fetchCategories() {
    return this.http.get(`${this.backendBaseUrl}/admin/product-categories`);
  }

  addCategory(category: string) {
    return this.http.post(`${this.backendBaseUrl}/admin/product-category`, {
      category,
    });
  }

  fetchProductList(pageNumber: number, limit: number = pageLimit) {
    const params: { pageNumber?: string; pageLimit?: string } = {};
    if (pageNumber) params.pageNumber = `${pageNumber}`;
    if (limit) params.pageLimit = `${limit}`;
    return this.http.get(`${this.backendBaseUrl}/admin/product-list`, {
      params,
    });
  }

  fetchProduct(productId: string) {
    return this.http.get(`${this.backendBaseUrl}/admin/product/${productId}`);
  }

  addOrUpdateProduct(product: IadminOrder) {
    return this.http.put(`${this.backendBaseUrl}/admin/product`, {
      product,
    });
  }

  deleteProduct(productId: string) {
    return this.http.delete(
      `${this.backendBaseUrl}/admin/product/${productId}`
    );
  }
}
