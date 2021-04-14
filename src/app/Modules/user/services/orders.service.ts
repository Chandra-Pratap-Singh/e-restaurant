import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}

  fetchOrder() {
    return this.http.get(`${this.backendBaseUrl}/user/orders`);
  }
}
