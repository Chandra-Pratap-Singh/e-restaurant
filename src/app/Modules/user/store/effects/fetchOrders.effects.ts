import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { Iorder } from '../../modal/interfaces/Iorder.interface';
import { OrdersService } from '../../services/orders.service';
import * as actionTypes from '../actions/action-types';
import { loadOrders } from '../actions/orders.action';

@Injectable()
export class FetchOrders {
  fetchOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_ORDERS),
      mergeMap((action: any) =>
        this.ordersService
          .fetchOrder(action?.pageNumber, action?.pageLimit)
          .pipe(
            map((res: { orders: Iorder[]; totalCount: number }) =>
              loadOrders(res)
            )
          )
      ),
      catchError((err) => {
        this.toastService.showToast(
          toastTypes.ERROR,
          err.error?.message || 'Error occured'
        );
        return EMPTY;
      })
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private ordersService: OrdersService
  ) {}
}
