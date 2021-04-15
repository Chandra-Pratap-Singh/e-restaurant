import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pageLimit } from 'src/app/constants/constant';
import { Iorder } from '../../modal/interfaces/Iorder.interface';
import { fetchOrders } from '../../store/actions/orders.action';
import {
  orderLoaderSelector,
  orderSelector,
  totalOrderCountSelector,
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
  pageNumber: number;
  pageLimit: number = pageLimit;
  $totalOrderCount: Observable<number>;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.pageNumber = data?.pageNumber || 1;
      this.store.dispatch(
        fetchOrders({ pageNumber: this.pageNumber, pageLimit: pageLimit })
      );
    });
    this.$orderList = this.store.select(orderSelector);
    this.$ordersLoader = this.store.select(orderLoaderSelector);
    this.$totalOrderCount = this.store.select(totalOrderCountSelector);
  }
  changePage(value) {
    console.log(value, this.pageNumber);
    this.router.navigate(['/shop', 'order-list'], {
      queryParams: {
        pageNumber: this.pageNumber,
      },
      queryParamsHandling: 'merge',
    });
  }
}
