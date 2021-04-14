import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}

  fetchActiveOrders() {
    return this.http.get(`${this.backendBaseUrl}/admin/active-order-list`);
  }

  fetchCompletedOrders() {
    return this.http.get(`${this.backendBaseUrl}/admin/completed-order-list`);
  }

  fetchRejectedOrders() {
    return this.http.get(`${this.backendBaseUrl}/admin/rejected-order-list`);
  }

  updateOrderStatus(orderId: string, newStatus: string) {
    return this.http.put(`${this.backendBaseUrl}/admin/update-order-status`, {
      orderId,
      newStatus,
    });
  }
}
