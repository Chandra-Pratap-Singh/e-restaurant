import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { toastTypes } from '../Modules/shared/constants';
import { ToastService } from '../Modules/shared/services/toast.service';
import { Iuser } from '../Modules/user/modal/interfaces/Iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router
  ) {}

  isUserLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.token || user?.adminToken;
  }

  getUserRole() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.token) return 'user';
    if (user?.adminToken) return 'admin';
  }

  signUp(user) {
    return this.http.post(`${this.backendBaseUrl}/auth/sign-up`, { user }).pipe(
      map((res: any) => {
        if (res?.token) {
          localStorage.setItem('user', JSON.stringify(res));
          return { status: 'success', userId: res?.userId, isAdmin: false };
        }
        return {
          status: 'failed',
          error: { message: 'Login Attempt Failed' },
        };
      }),
      catchError((err) => {
        this.toastService.showToast(
          toastTypes.ERROR,
          err.error?.message || 'Error occured'
        );
        return of({ status: 'failed', error: err?.error });
      })
    );
  }

  loginUser(userResponse) {
    if (userResponse?.token || userResponse?.adminToken) {
      if (userResponse?.token) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: userResponse?.token,
            userId: userResponse?.user?.userId,
          })
        );
        return { status: 'success', user: userResponse?.user, isAdmin: false };
      } else if (userResponse?.adminToken) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            adminToken: userResponse?.adminToken,
            userId: userResponse?.user?.userId,
          })
        );
        return { status: 'success', user: userResponse?.user, isAdmin: true };
      }
    }
    return {
      status: 'failed',
      error: { message: 'Login Attempt Failed' },
    };
  }

  login(
    email,
    password
  ): Observable<{
    status: string;
    user?: Iuser;
    error?: any;
    isAdmin?: boolean;
  }> {
    return this.http
      .post(`${this.backendBaseUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((res: any) => this.loginUser(res)),
        catchError((err) => {
          this.toastService.showToast(
            toastTypes.ERROR,
            err.error?.message || 'Error occured'
          );
          return of({ status: 'failed', error: err?.error });
        })
      );
  }

  logout(): void {
    localStorage.clear();
    window.location.replace('/entry');
  }
}
