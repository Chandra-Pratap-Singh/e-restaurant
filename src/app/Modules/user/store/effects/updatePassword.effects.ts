import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../services/user.service';
import * as actionTypes from '../actions/action-types';
import { fetchUser } from '../actions/user.action';

@Injectable()
export class UpdatePassword {
  updatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.UPDATE_PASSWORD),
      mergeMap((action: any) =>
        this.userService
          .changePassword(action.oldPassword, action.newPassword)
          .pipe(
            tap(() => this.authService.logout()),
            map(() => fetchUser())
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
    private userService: UserService,
    private authService: AuthService
  ) {}
}
