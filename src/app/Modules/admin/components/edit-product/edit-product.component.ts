import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DEFAULT_NEW_PRODUCT } from '../../constants';
import { IadminProduct } from '../../modal/interfaces/IadminProduct.interface';
import { Icategory } from '../../modal/interfaces/Icategory.interface';
import {
  addOrUpdateProduct,
  deleteProduct,
  fetchCategories,
  fetchProduct,
} from '../../store/actions/product.actions';
import {
  adminAddOrUpdateProductsLoaderSelector,
  adminCategoriesLoaderSelector,
  adminProductCategoriesSelector,
  adminProductLoaderSelector,
  adminProductSelector,
} from '../../store/selectors/adminProduct.selector';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent implements OnInit, OnDestroy {
  productId: string;
  product: IadminProduct = DEFAULT_NEW_PRODUCT;
  variant: 'edit' | 'new';
  $categories: Observable<Icategory[]>;
  $addorUpdateProduct: Observable<boolean>;
  $categoriesLoader: Observable<boolean>;
  $productLoader: Observable<boolean>;
  openAddCategory: boolean = false;
  openDeleteConfirmationBox: boolean = false;
  imageName: string;
  productSubscription: Subscription;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.$addorUpdateProduct = this.store.select(
      adminAddOrUpdateProductsLoaderSelector
    );
    this.$categoriesLoader = this.store.select(adminCategoriesLoaderSelector);
    this.$productLoader = this.store.select(adminProductLoaderSelector);
    this.route.params.subscribe((data) => {
      this.productId = data.id;
      this.variant = !!this.productId ? 'edit' : 'new';
      if (!!this.productId) {
        this.store.dispatch(fetchProduct({ productId: this.productId }));
        this.productSubscription = this.store
          .select(adminProductSelector)
          .subscribe((data) => {
            this.product = data;
          });
      }
    });

    this.store.dispatch(fetchCategories());
    this.$categories = this.store.select(adminProductCategoriesSelector);
  }

  updatePreview() {
    this.product = { ...this.product };
  }

  delete() {
    this.store.dispatch(deleteProduct({ productId: this.productId }));
  }

  cancle() {
    this.router.navigate(['admin', 'product-list']);
  }

  save() {
    this.store.dispatch(addOrUpdateProduct({ product: this.product }));
  }

  updatecategory(event) {
    this.product.category = event.target.checked
      ? [...this.product.category, { _id: event.target.value, category: '' }]
      : this.product.category.filter(
          (cat) => cat._id !== event.target.value._id
        );
  }

  updateImage(event) {
    const file = event.target.files[0];
    this.imageName = file.name;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.product = { ...this.product, img: fileReader.result.toString() };
      this.cd.markForCheck();
    };
    fileReader.readAsDataURL(file);
  }

  isCategoryChecked(category) {
    return this.product.category.some((item) => category._id === item._id);
  }

  toggleAvailability() {
    this.product = { ...this.product, available: !this.product?.available };
  }

  ngOnDestroy() {
    this.productSubscription && this.productSubscription.unsubscribe();
  }
}
