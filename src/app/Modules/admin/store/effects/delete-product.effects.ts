import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { ProductService } from '../../services/product.service';
import * as actionTypes from '../actions/action-types';

@Injectable()
export class DeleteProduct {
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.DELETE_PRODUCT),
      mergeMap((action: any) =>
        this.productService.deleteProduct(action.productId).pipe(
          map(() => {
            this.router.navigate(['admin', 'product-list']);
            return {
              type: actionTypes.FETCH_PRODUCT_LIST,
            };
          }),
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
    private productService: ProductService,
    private toastService: ToastService,
    private router: Router
  ) {}
}
