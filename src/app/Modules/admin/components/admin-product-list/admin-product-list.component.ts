import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pageLimit } from 'src/app/constants/constant';
import { IadminProduct } from '../../modal/interfaces/IadminProduct.interface';
import { fetchProducts } from '../../store/actions/product.actions';
import {
  adminProductsCountSelector,
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
  pageNumber: number;
  pageLimit: number = pageLimit;
  $totalProductCount: Observable<number>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.pageNumber = data?.pageNumber || 1;
      this.store.dispatch(
        fetchProducts({ pageNumber: this.pageNumber, pageLimit })
      );
    });
    this.$totalProductCount = this.store.select(adminProductsCountSelector);
    this.$productsLoader = this.store.select(adminProductsLoaderSelector);
    this.$productList = this.store.select(adminProductsSelector);
  }

  changePage(value) {
    this.router.navigate(['/admin', 'product-list'], {
      queryParams: {
        pageNumber: this.pageNumber,
      },
    });
  }
}
