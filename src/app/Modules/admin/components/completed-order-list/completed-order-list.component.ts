import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IadminOrder } from '../../modal/interfaces/IadminOrder.interface';
import { fetchCompletedOrders } from '../../store/actions/order.action';
import { adminCompletedOrdersSelector } from '../../store/selectors/adminOrder.selector';

@Component({
  selector: 'app-completed-order-list',
  templateUrl: './completed-order-list.component.html',
  styleUrls: ['./completed-order-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedOrderListComponent implements OnInit {
  $completedOrders: Observable<IadminOrder[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchCompletedOrders());
    this.$completedOrders = this.store.select(adminCompletedOrdersSelector);
  }
}
