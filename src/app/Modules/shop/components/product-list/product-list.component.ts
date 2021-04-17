import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pageLimit } from 'src/app/constants/constant';
import { loaderVarients } from 'src/app/Modules/shared/constants';
import {
  addItemToCart,
  removeItemFromcart,
} from 'src/app/Modules/user/store/actions/cart.action';
import { cartItemQuantitySelector } from 'src/app/Modules/user/store/selectors/cartItem.selector';
import Icategory from '../../modal/interfaces/Icategory.interface';
import Iproduct from '../../modal/interfaces/Iproduct.interface';
import {
  fetchProductCategories,
  fetchProducts,
} from '../../store/actions/products.action';
import {
  categoriesLoaderSelector,
  productCategorySelector,
  productsCountSelector,
  productsLoaderSelector,
  productsSelector,
} from '../../store/selectors/products.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  $categories: Observable<Icategory[]>;
  $productList: Observable<Iproduct[]>;
  $productsLoader: Observable<boolean>;
  $categoriesLoader: Observable<boolean>;
  productsLoaderVarient = loaderVarients.FOOD;
  categoriesLoaderVarient = loaderVarients.DEFAULT;
  openSidebar: boolean = false;
  closeIcon = faTimes;
  isScreenBig: boolean;
  pageNumber: number;
  pageLimit: number = pageLimit;
  $totalProductCount: Observable<number>;
  categoryFilter: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @HostListener('window:resize', ['$event'])
  resizehandler() {
    if (document.body.offsetWidth > 992)
      this.openSidebar = this.isScreenBig = true;
    else this.isScreenBig = false;
  }
  ngOnInit(): void {
    // this.store.dispatch(fetchProducts({}));
    this.store.dispatch(fetchProductCategories());
    this.$categories = this.store.select(productCategorySelector);
    this.$productList = this.store.select(productsSelector, {});
    this.$productsLoader = this.store.select(productsLoaderSelector);
    this.$categoriesLoader = this.store.select(categoriesLoaderSelector);
    this.route.queryParams.subscribe((data) => {
      this.pageNumber = data?.pageNumber || 1;
      this.categoryFilter = data?.category;
      this.store.dispatch(
        fetchProducts({
          filters: { category: this.categoryFilter },
          pageNumber: this.pageNumber,
          pageLimit,
        })
      );
    });
    // this.route.params.subscribe((data) => {
    //   this.categoryFilter = data?.category;
    //   this.categoryFilter &&
    //     this.store.dispatch(
    //       fetchProducts({
    //         filters: { category: this.categoryFilter },
    //         pageNumber: this.pageNumber,
    //         pageLimit,
    //       })
    //     );
    // });
    this.$totalProductCount = this.store.select(productsCountSelector);
    if (document.body.offsetWidth > 992)
      this.openSidebar = this.isScreenBig = true;
    else this.isScreenBig = false;
  }

  toggleSidenavBar(state) {
    this.openSidebar = state;
  }

  addItemToCart(productId) {
    this.store.dispatch(addItemToCart({ productId }));
  }

  removeItemFromCart(productId) {
    this.store.dispatch(removeItemFromcart({ productId }));
  }

  presentInCart(productId: string): Observable<number> {
    return this.store.select(cartItemQuantitySelector, { productId });
  }

  changePage(value) {
    this.router.navigate(['/shop', 'product-list'], {
      queryParams: {
        pageNumber: this.pageNumber,
      },
    });
  }
}
