import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckCustomerEntryGuard implements CanLoad, CanActivate {
  $allowEntry: Observable<boolean>;
  constructor(private router: Router) {}
  canLoad(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!!user?.token) {
      return true;
    } else {
      this.router.navigate(['/entry']);
      return false;
    }
  }
  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!!user?.token) {
      return true;
    } else {
      this.router.navigate(['/entry']);
      return false;
    }
  }
}
