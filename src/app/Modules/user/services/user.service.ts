import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Iaddress } from '../modal/interfaces/Iuser.interface';
import { userActiveAddressSelector } from '../store/selectors/user.selector';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  activeAddress: any;
  backendBaseUrl: string = environment.backendBaseUrl;
  constructor(private http: HttpClient, store: Store) {
    store
      .select(userActiveAddressSelector)
      .subscribe((address) => (this.activeAddress = address));
  }

  fetchUser() {
    return this.http.get(`${this.backendBaseUrl}/user`);
  }

  checkout() {
    return this.http.put(`${this.backendBaseUrl}/user/checkout`, {
      address: this.activeAddress,
    });
  }

  addOrUpdateAddress(address: Iaddress) {
    return this.http.put(`${this.backendBaseUrl}/user/address`, { address });
  }

  deleteAddress(addressId: string) {
    return this.http.delete(`${this.backendBaseUrl}/user/address/${addressId}`);
  }

  updateUserProfile(userProfile) {
    return this.http.patch(`${this.backendBaseUrl}/user/user-profile`, {
      user: userProfile,
    });
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.patch(`${this.backendBaseUrl}/user/change-password`, {
      oldPassword,
      newPassword,
    });
  }
}
