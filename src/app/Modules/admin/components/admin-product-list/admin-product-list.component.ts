import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IadminProduct } from '../../modal/interfaces/IadminProduct.interface';
import { fetchProducts } from '../../store/actions/product.actions';
import {
  adminProductsLoaderSelector,
  adminProductsSelector,
} from '../../store/selectors/adminProduct.selector';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminProductListComponent implements OnInit {
  $productList: Observable<IadminProduct[]>;
  $productsLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());
    this.$productsLoader = this.store.select(adminProductsLoaderSelector);
    this.$productList = this.store.select(adminProductsSelector);
  }
}
