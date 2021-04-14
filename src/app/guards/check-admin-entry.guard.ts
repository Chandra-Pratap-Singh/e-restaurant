import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckAdminEntryGuard implements CanLoad, CanActivate {
  constructor(private router: Router) {}
  canLoad(): boolean {
    const admin = JSON.parse(localStorage.getItem('user'));
    if (!!admin?.adminToken) {
      return true;
    } else {
      this.router.navigate(['/entry']);
      return false;
    }
  }
  canActivate(): boolean {
    const admin = JSON.parse(localStorage.getItem('user'));
    if (!!admin?.adminToken) {
      return true;
    } else {
      this.router.navigate(['/entry']);
      return false;
    }
  }
}
