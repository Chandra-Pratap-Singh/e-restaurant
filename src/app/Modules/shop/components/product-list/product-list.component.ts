import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private store: Store, private route: ActivatedRoute) {}
  @HostListener('window:resize', ['$event'])
  resizehandler() {
    if (document.body.offsetWidth > 992)
      this.openSidebar = this.isScreenBig = true;
    else this.isScreenBig = false;
  }
  ngOnInit(): void {
    this.store.dispatch(fetchProducts({}));
    this.store.dispatch(fetchProductCategories());
    this.$categories = this.store.select(productCategorySelector);
    this.$productList = this.store.select(productsSelector, {});
    this.$productsLoader = this.store.select(productsLoaderSelector);
    this.$categoriesLoader = this.store.select(categoriesLoaderSelector);
    this.route.params.subscribe((data) => {
      this.store.dispatch(
        fetchProducts({ filters: { category: data.category } })
      );
    });
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
}
