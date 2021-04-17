import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckCustomerEntryGuard } from 'src/app/guards/check-customer-entry.guard';
import { AddressListComponent } from '../user/components/address-list/address-list.component';
import { AddressComponent } from '../user/components/address/address.component';
import { ChangePasswordComponent } from '../user/components/change-password/change-password.component';
import { CheckoutComponent } from '../user/components/checkout/checkout.component';
import { EditProfileComponent } from '../user/components/edit-profile/edit-profile.component';
import { OrderListComponent } from '../user/components/order-list/order-list.component';
import { ProfileComponent } from '../user/components/profile/profile.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CheckCustomerEntryGuard],
    component: ShopComponent,
    children: [
      {
        path: 'product-list',
        canActivate: [CheckCustomerEntryGuard],
        component: ProductListComponent,
      },
      {
        path: 'checkout',
        canActivate: [CheckCustomerEntryGuard],
        component: CheckoutComponent,
      },
      {
        path: 'order-list',
        canActivate: [CheckCustomerEntryGuard],
        component: OrderListComponent,
      },
      {
        path: 'address/:addressId',
        canActivate: [CheckCustomerEntryGuard],
        component: AddressComponent,
      },
      {
        path: 'address-list',
        canActivate: [CheckCustomerEntryGuard],
        component: AddressListComponent,
      },
      {
        path: 'profile',
        canActivate: [CheckCustomerEntryGuard],
        component: ProfileComponent,
      },
      {
        path: 'edit-profile',
        canActivate: [CheckCustomerEntryGuard],
        component: EditProfileComponent,
      },
      {
        path: 'change-password',
        canActivate: [CheckCustomerEntryGuard],
        component: ChangePasswordComponent,
      },
      { path: '**', redirectTo: 'product-list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
