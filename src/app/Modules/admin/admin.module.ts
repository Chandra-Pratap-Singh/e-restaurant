import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { CompletedOrderListComponent } from './components/completed-order-list/completed-order-list.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as adminReducer from './store/reducers';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LoadCategories } from './store/effects/categories.effects';
import { AddCategory } from './store/effects/add-category.effects';
import { LoadProducts } from './store/effects/load-product-list.effects';
import { AddOrUpdateProduct } from './store/effects/add-update-product.efects';
import { LoadProduct } from './store/effects/load-product.effects';
import { DeleteProduct } from './store/effects/delete-product.effects';
import { FetchActiveOrders } from './store/effects/fetch-active-orders.effects';
import { FetchCompletedOrders } from './store/effects/fetch-completed-orders.effects';
import { FetchRejectedOrders } from './store/effects/fetch-rejected-orders.effects';
import { UpdateOrderStatus } from './store/effects/update-order-status.effects';
import { WebSocketService } from './services/web-socket.service';

@NgModule({
  declarations: [
    ManageOrdersComponent,
    CompletedOrderListComponent,
    EditProductComponent,
    AdminProductListComponent,
    AdminComponent,
    AdminHeaderComponent,
    AddCategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    DragDropModule,
    HttpClientModule,
    EffectsModule.forFeature([
      LoadCategories,
      AddCategory,
      LoadProducts,
      AddOrUpdateProduct,
      LoadProduct,
      DeleteProduct,
      FetchActiveOrders,
      FetchCompletedOrders,
      FetchRejectedOrders,
      UpdateOrderStatus,
    ]),
    StoreModule.forFeature(adminReducer.key, adminReducer.adminReducer),
  ],
  providers: [WebSocketService],
})
export class AdminModule {}
