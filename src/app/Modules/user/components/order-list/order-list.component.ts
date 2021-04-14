import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iorder } from '../../modal/interfaces/Iorder.interface';
import { fetchOrders } from '../../store/actions/orders.action';
import {
  orderLoaderSelector,
  orderSelector,
} from '../../store/selectors/orders.selector';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListComponent implements OnInit {
  $orderList: Observable<Iorder[]>;
  $ordersLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchOrders());
    this.$orderList = this.store.select(orderSelector);
    this.$ordersLoader = this.store.select(orderLoaderSelector);
  }
}
