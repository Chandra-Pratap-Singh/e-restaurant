import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iaddress, Iuser } from '../../modal/interfaces/Iuser.interface';
import { addOrUpdateAddress } from '../../store/actions/user.action';
import {
  addOrUpdateAddressLoaderSelector,
  addressSelector,
  userSelector,
} from '../../store/selectors/user.selector';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addressForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    identifier: new FormControl(),
    address: new FormControl(),
  });
  address: Iaddress;
  user: Iuser;
  $saveAddressLoader: Observable<boolean>;
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const addressId = data?.addressId;
      this.getAddressData(addressId);
    });
    this.$saveAddressLoader = this.store.select(
      addOrUpdateAddressLoaderSelector
    );
  }

  getAddressData(addressId: string) {
    if (addressId !== 'new') {
      this.store.select(addressSelector, { addressId }).subscribe((item) => {
        this.address = { ...item };
      });
    } else {
      this.store.select(userSelector).subscribe((user) => {
        this.address = {
          name: user?.name,
          phone: user?.phone,
          email: user?.email,
          identifier: '',
          address: '',
          isPrimary: false,
          addressId: null,
        };
      });
    }
  }

  save() {
    console.log(this.address);
    this.store.dispatch(addOrUpdateAddress({ address: this.address }));
  }
}
