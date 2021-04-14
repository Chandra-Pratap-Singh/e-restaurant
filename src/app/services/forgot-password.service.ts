import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient) {}
  sendResetPasswordMail(email: string) {
    return this.http.post(
      `${this.backendBaseUrl}/user/request-password-reset`,
      {
        email,
      }
    );
  }
  changePassword(token: string, password: string) {
    return this.http.patch(`${this.backendBaseUrl}/user/forgot-password`, {
      token,
      password,
    });
  }
}
