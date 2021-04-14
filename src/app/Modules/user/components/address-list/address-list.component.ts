import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iaddress } from '../../modal/interfaces/Iuser.interface';
import {
  addressListLoaderSelector,
  deleteAddressLoaderSelector,
  userAdressSelector,
} from '../../store/selectors/user.selector';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
})
export class AddressListComponent implements OnInit {
  $addressList: Observable<Iaddress[]>;
  $addressListLoader: Observable<boolean>;
  $deleteAddressLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.$addressList = this.store.select(userAdressSelector);
    this.$addressListLoader = this.store.select(addressListLoaderSelector);
    this.$deleteAddressLoader = this.store.select(deleteAddressLoaderSelector);
  }
}
