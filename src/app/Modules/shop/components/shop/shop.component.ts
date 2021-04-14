import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Iuser } from 'src/app/Modules/user/modal/interfaces/Iuser.interface';
import { fetchUser } from 'src/app/Modules/user/store/actions/user.action';
import { userSelector } from 'src/app/Modules/user/store/selectors/user.selector';
import Icategory from '../../modal/interfaces/Icategory.interface';
import { productCategorySelector } from '../../store/selectors/products.selector';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit, OnDestroy {
  $categories: Observable<Icategory[]>;
  user: Iuser;
  userSubscription: Subscription;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userSubscription = this.store
      .select(userSelector)
      .subscribe((data) => (this.user = data));
    if (!this.user) this.store.dispatch(fetchUser());
    this.$categories = this.store.select(productCategorySelector);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
