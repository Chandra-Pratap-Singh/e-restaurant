import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { CartService } from '../../services/cart.service';
import * as actionTypes from '../actions/action-types';

@Injectable()
export class FetchCartItems {
  fetchCartItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_CART_ITEMS),
      mergeMap(() =>
        this.cartService.fetchCartItems().pipe(
          map((cartItems) => ({
            type: actionTypes.LOAD_CART_ITEMS,
            cartItems,
          }))
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
    private cartService: CartService
  ) {}
}
