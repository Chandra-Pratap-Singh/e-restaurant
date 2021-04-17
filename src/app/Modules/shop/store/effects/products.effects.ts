import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import Iproduct from '../../modal/interfaces/Iproduct.interface';
import { ProductsService } from '../../services/products.service';
import * as actionTypes from '../actions/action-types';
import { loadProducts } from '../actions/products.action';

@Injectable()
export class LoadProducts {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_PRODUCTS),
      mergeMap((
        action: any //to be improved
      ) =>
        this.productService
          .fetchProducts(action?.filters, action?.pageNumber, action?.pageLimit)
          .pipe(
            map((res: { productList: Iproduct[]; totalCount: number }) =>
              loadProducts({
                products: res?.productList,
                totalCount: res?.totalCount,
              })
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
    private productService: ProductsService,
    private toastService: ToastService
  ) {}
}
