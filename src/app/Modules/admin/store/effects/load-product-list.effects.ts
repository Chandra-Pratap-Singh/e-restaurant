import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { IadminProduct } from '../../modal/interfaces/IadminProduct.interface';
import { ProductService } from '../../services/product.service';
import * as actionTypes from '../actions/action-types';
import { loadProducts } from '../actions/product.actions';

@Injectable()
export class LoadProducts {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_PRODUCT_LIST),
      mergeMap((action: any) =>
        this.productService
          .fetchProductList(action?.pageNumber, action?.pageLimit)
          .pipe(
            map((res: { products: IadminProduct[]; totalCount: number }) =>
              loadProducts({
                products: res?.products,
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
    private productService: ProductService,
    private toastService: ToastService
  ) {}
}
