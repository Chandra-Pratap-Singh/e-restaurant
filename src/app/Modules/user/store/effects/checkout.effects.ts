import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { OrdersService } from '../../services/orders.service';
import { UserService } from '../../services/user.service';
import * as actionTypes from '../actions/action-types';
import { fetchCartItems } from '../actions/cart.action';
import { checkoutComplete, fetchUser } from '../actions/user.action';

@Injectable()
export class Checkout {
  checkout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.CHECKOUT),
      mergeMap(() =>
        this.userService.checkout().pipe(
          map(() => {
            this.router.navigate(['shop/order-list']);
            return [fetchCartItems(), checkoutComplete()];
          })
        )
      ),
      mergeMap((res) => res),
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
    private userService: UserService,
    private router: Router
  ) {}
}
