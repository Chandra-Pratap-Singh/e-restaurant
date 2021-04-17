import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { IadminOrder } from '../../modal/interfaces/IadminOrder.interface';
import { OrderService } from '../../services/order.service';
import * as actionTypes from '../actions/action-types';
import { loadCompletedOrders } from '../actions/order.action';

@Injectable()
export class FetchCompletedOrders {
  fetchCompletedOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_COMPLETED_ORDERS),
      mergeMap((action: any) =>
        this.orderService
          .fetchCompletedOrders(action?.pageNumber, action?.pageLimit)
          .pipe(
            map((res: { orders: IadminOrder[]; totalCount?: number }) =>
              loadCompletedOrders(res)
            ),
            catchError((err) => {
              this.toastService.showToast(
                toastTypes.ERROR,
                err.error?.message || 'Error occured'
              );
              return EMPTY;
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private toastService: ToastService
  ) {}
}
