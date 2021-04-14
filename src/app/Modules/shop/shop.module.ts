import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShopRoutingModule } from './shop-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserModule } from '../user/user.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as reducer from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoadProducts } from './store/effects/products.effects';
import { LoadProductCategories } from './store/effects/product-categories.effects';

@NgModule({
  declarations: [HeaderComponent, ShopComponent, ProductListComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forFeature([LoadProducts, LoadProductCategories]),
    StoreModule.forFeature(reducer.key, reducer.productsReducer),
  ],
})
export class ShopModule {}
