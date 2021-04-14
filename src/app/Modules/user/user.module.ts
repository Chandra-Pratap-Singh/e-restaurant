import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import * as userReducer from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { EffectsModule } from '@ngrx/effects';
import { AddItemToCart } from './store/effects/addItemToCart.effects';
import { FetchCartItems } from './store/effects/fetchCartItems.effects';
import { RemoveItemFromCart } from './store/effects/removeItemFromCart.effects';
import { FetchUser } from './store/effects/fetchUser.effects';
import { FetchOrders } from './store/effects/fetchOrders.effects';
import { Checkout } from './store/effects/checkout.effects';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressComponent } from './components/address/address.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddOrUpdateAddress } from './store/effects/addOrUpdateAddress.effetcs';
import { DeleteAddress } from './store/effects/deleteAddress.effects';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UpdateUserProfile } from './store/effects/updateUserProfile.effects';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdatePassword } from './store/effects/updatePassword.effects';

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderListComponent,
    AddressListComponent,
    AddressComponent,
    AddressCardComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature(userReducer.key, userReducer.reducer),
    SharedModule,
    MatRadioModule,
    EffectsModule.forFeature([
      AddItemToCart,
      FetchCartItems,
      RemoveItemFromCart,
      FetchUser,
      FetchOrders,
      Checkout,
      AddOrUpdateAddress,
      DeleteAddress,
      UpdateUserProfile,
      UpdatePassword,
    ]),
  ],
  exports: [
    CheckoutComponent,
    OrderListComponent,
    AddressListComponent,
    AddressComponent,
    AddressCardComponent,
  ],
})
export class UserModule {}
