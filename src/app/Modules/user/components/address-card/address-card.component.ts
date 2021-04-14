import { Component, Input, OnInit } from '@angular/core';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Iaddress } from '../../modal/interfaces/Iuser.interface';
import { deleteAddress } from '../../store/actions/user.action';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  editIcon = faPen;
  deleteIcon = faTrashAlt;
  @Input() address: Iaddress;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  deleteAddress(addressId: string) {
    this.store.dispatch(deleteAddress({ addressId }));
  }
}
