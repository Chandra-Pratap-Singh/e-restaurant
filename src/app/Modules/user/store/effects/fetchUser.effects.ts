import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { UserService } from '../../services/user.service';
import * as actionTypes from '../actions/action-types';

@Injectable()
export class FetchUser {
  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.FETCH_USER),
      mergeMap(() =>
        this.userService.fetchUser().pipe(
          map((user) => ({
            type: actionTypes.LOAD_USER,
            user,
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
    private userService: UserService
  ) {}
}
