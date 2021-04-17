import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pageLimit } from 'src/app/constants/constant';
import { IadminOrder } from '../../modal/interfaces/IadminOrder.interface';
import { fetchCompletedOrders } from '../../store/actions/order.action';
import {
  adminCompletedOrdersSelector,
  completedOrdersCountSelector,
  completedOrdersLoader,
} from '../../store/selectors/adminOrder.selector';

@Component({
  selector: 'app-completed-order-list',
  templateUrl: './completed-order-list.component.html',
  styleUrls: ['./completed-order-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedOrderListComponent implements OnInit {
  $completedOrders: Observable<IadminOrder[]>;
  pageNumber: number;
  pageLimit: number = pageLimit;
  $totalOrderCount: Observable<number>;
  $completedOrdersLoader: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.pageNumber = data?.pageNumber || 1;
      this.store.dispatch(
        fetchCompletedOrders({ pageNumber: this.pageNumber, pageLimit })
      );
    });
    this.$completedOrdersLoader = this.store.select(completedOrdersLoader);
    this.$completedOrders = this.store.select(adminCompletedOrdersSelector);
    this.$totalOrderCount = this.store.select(completedOrdersCountSelector);
  }

  changePage(value) {
    this.router.navigate(['/admin', 'completed-orders'], {
      queryParams: {
        pageNumber: this.pageNumber,
      },
      queryParamsHandling: 'merge',
    });
  }
}
