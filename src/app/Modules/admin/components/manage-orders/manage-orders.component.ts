import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ORDER_COMPLETED_STATUS,
  ORDER_REJECTED_STATUS,
  ORDER_STATUSES,
} from 'src/app/constants/constant';
import { IadminOrder } from '../../modal/interfaces/IadminOrder.interface';
import {
  activeOrdersLoader,
  adminActiveOrdersSelector,
} from '../../store/selectors/adminOrder.selector';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  fetchActiveOrders,
  updateOrderStatus,
} from '../../store/actions/order.action';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageOrdersComponent implements OnInit, OnDestroy {
  $activeOrderList: Observable<{ status: string; orders: IadminOrder[] }[]>;
  $activeOrdersLoader: Observable<boolean>;

  orderStatuses = ORDER_STATUSES.filter(
    (status) =>
      status !== ORDER_COMPLETED_STATUS && status !== ORDER_REJECTED_STATUS
  );

  constructor(
    private store: Store,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchActiveOrders());
    this.$activeOrderList = this.store
      .select(adminActiveOrdersSelector)
      .pipe(map((order) => this.catergoriseOrdersStatusWise(order)));
    this.$activeOrdersLoader = this.store.select(activeOrdersLoader);
    this.webSocketService.listenForNewOrderRequests();
  }

  catergoriseOrdersStatusWise(orders: IadminOrder[]) {
    return this.orderStatuses.map((status) => ({
      status,
      orders: orders?.filter((order) => order?.status === status),
    }));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.data !== event.previousContainer.data) {
      this.store.dispatch(
        updateOrderStatus({
          orderId: event.item.data.orderId,
          newStatus: event.container.data[0],
        })
      );
    }
  }

  moveToNextStep(orderId: string, currStatus: string) {
    this.store.dispatch(
      updateOrderStatus({
        orderId,
        newStatus: ORDER_STATUSES[this.orderStatuses.indexOf(currStatus) + 1],
      })
    );
  }

  updateOrderStatus(orderId: string) {
    return (newStatus: string) =>
      this.store.dispatch(
        updateOrderStatus({
          orderId,
          newStatus,
        })
      );
  }

  ngOnDestroy() {}
}
