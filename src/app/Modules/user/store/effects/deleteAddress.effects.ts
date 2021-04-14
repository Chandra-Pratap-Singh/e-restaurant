import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { UserService } from '../../services/user.service';
import * as actionTypes from '../actions/action-types';
import { fetchUser } from '../actions/user.action';

@Injectable()
export class DeleteAddress {
  deleteAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.DELETE_ADDRESS),
      mergeMap((action: any) =>
        this.userService
          .deleteAddress(action.addressId)
          .pipe(map(() => fetchUser()))
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
    private userService: UserService
  ) {}
}
