import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { OrderService } from '../../services/order.service';
import * as actionTypes from '../actions/action-types';

@Injectable()
export class FetchActiveOrders {
  fetchActiveOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_ACTIVE_ORDERS),
      mergeMap(() =>
        this.orderService.fetchActiveOrders().pipe(
          map((orders) => ({
            type: actionTypes.LOAD_ACTIVE_ORDERS,
            orders,
          })),
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
