import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { ProductService } from '../../services/product.service';
import * as actionTypes from '../actions/action-types';

@Injectable()
export class AddCategory {
  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.ADD_CATEGORY),
      mergeMap((action: any) =>
        this.productService.addCategory(action.category).pipe(
          map(() => ({
            type: actionTypes.FETCH_CATEGORY,
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
    private productService: ProductService,
    private toastService: ToastService
  ) {}
}
