import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  backendBaseUrl: string = environment.backendBaseUrl;
  addItemToCartInDb(productId: string) {
    return this.http.put(`${this.backendBaseUrl}/user/add-cart-item`, {
      productId,
    });
  }

  removeItemFromCartInDb(productId: string) {
    return this.http.post(`${this.backendBaseUrl}/user/remove-cart-item`, {
      productId,
    });
  }

  fetchCartItems() {
    return this.http.get(`${this.backendBaseUrl}/user/cart-items`);
  }

  constructor(private http: HttpClient) {}
}
