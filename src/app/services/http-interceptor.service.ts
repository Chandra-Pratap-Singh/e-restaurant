import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token || user?.adminToken;
    const updatedReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`),
    });
    return handler.handle(updatedReq);
  }
}
