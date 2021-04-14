import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { ProductsService } from '../../services/products.service';
import * as actionTypes from '../actions/action-types';

@Injectable()
export class LoadProducts {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_PRODUCTS),
      mergeMap((
        action: any //to be improved
      ) =>
        this.productService.fetchProducts(action?.filters).pipe(
          map((products) => ({
            type: actionTypes.LOAD_PRODUCTS,
            products: products,
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
    private productService: ProductsService,
    private toastService: ToastService
  ) {}
}
