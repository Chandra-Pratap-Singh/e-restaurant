import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { toastTypes } from 'src/app/Modules/shared/constants';
import { ToastService } from 'src/app/Modules/shared/services/toast.service';
import { UserService } from '../../services/user.service';
import * as actionTypes from '../actions/action-types';
import { fetchUser } from '../actions/user.action';

@Injectable()
export class AddOrUpdateAddress {
  addOrUpdateAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.ADD_OR_UPDATE_ADDRESS),
      mergeMap((action: any) =>
        this.userService.addOrUpdateAddress(action.address).pipe(
          tap(() => this.router.navigate(['/shop', 'address-list'])),
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
    private router: Router
  ) {}
}
