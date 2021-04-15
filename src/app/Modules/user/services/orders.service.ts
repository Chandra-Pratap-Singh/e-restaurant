import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}

  fetchOrder(pageNumber: number, pageLimit: number) {
    return this.http.get(`${this.backendBaseUrl}/user/orders`, {
      params: {
        pageNumber: `${pageNumber}`,
        pageLimit: `${pageLimit}`,
      },
    });
  }
}
