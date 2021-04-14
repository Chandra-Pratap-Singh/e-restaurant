import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IcartItem } from '../../modal/interfaces/Icart.interface';
import { Iaddress } from '../../modal/interfaces/Iuser.interface';
import {
  addItemToCart,
  removeItemFromcart,
} from '../../store/actions/cart.action';
import { checkout, updateActiveAddress } from '../../store/actions/user.action';
import {
  cartItemSelector,
  checkoutLoader,
  totalCartValueSelector,
} from '../../store/selectors/cartItem.selector';
import {
  userActiveAddressSelector,
  userAdressSelector,
} from '../../store/selectors/user.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  $cartItemList: Observable<IcartItem[]>;
  $totalCartValue: Observable<number>;
  $addresses: Observable<Iaddress[]>;
  $activeAddress: Observable<Iaddress>;
  $checkoutLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.$cartItemList = this.store.select(cartItemSelector);
    this.$totalCartValue = this.store.select(totalCartValueSelector);
    this.$addresses = this.store.select(userAdressSelector);
    this.$activeAddress = this.store.select(userActiveAddressSelector);
    this.$checkoutLoader = this.store.select(checkoutLoader);
  }

  updateDeliveryAddress({ value }) {
    this.store.dispatch(
      updateActiveAddress({ name: value.name, identifier: value.identifier })
    );
  }

  addItemToCart(productId) {
    this.store.dispatch(addItemToCart({ productId }));
  }

  removeItemFromCart(productId) {
    this.store.dispatch(removeItemFromcart({ productId }));
  }

  order() {
    this.store.dispatch(checkout());
  }
}
