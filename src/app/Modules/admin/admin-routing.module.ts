import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckAdminEntryGuard } from 'src/app/guards/check-admin-entry.guard';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompletedOrderListComponent } from './components/completed-order-list/completed-order-list.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CheckAdminEntryGuard],
    component: AdminComponent,
    children: [
      {
        path: 'manage-orders',
        canActivate: [CheckAdminEntryGuard],
        component: ManageOrdersComponent,
      },
      {
        path: 'completed-orders',
        canActivate: [CheckAdminEntryGuard],
        component: CompletedOrderListComponent,
      },
      {
        path: 'product-list',
        canActivate: [CheckAdminEntryGuard],
        component: AdminProductListComponent,
      },
      {
        path: 'product/edit/:id',
        canActivate: [CheckAdminEntryGuard],
        component: EditProductComponent,
      },
      {
        path: 'product/new',
        canActivate: [CheckAdminEntryGuard],
        component: EditProductComponent,
      },
      { path: '**', redirectTo: 'manage-orders' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
