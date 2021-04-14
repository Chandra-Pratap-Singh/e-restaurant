import { createAction, props } from '@ngrx/store';
import {
  Iaddress,
  Iuser,
  IuserProfile,
} from '../../modal/interfaces/Iuser.interface';
import { addressSelector } from '../selectors/user.selector';
import * as actionTypes from './action-types';

export const updateActiveAddress = createAction(
  actionTypes.UPDATE_ACTIVE_ADDRESS,
  props<{ name: string; identifier: string }>()
);

export const fetchUser = createAction(actionTypes.FETCH_USER);

export const loadUser = createAction(
  actionTypes.LOAD_USER,
  props<{ user: Iuser }>()
);

export const checkout = createAction(actionTypes.CHECKOUT);

export const checkoutComplete = createAction(actionTypes.CHECKOUT_COMPLETE);

export const addOrUpdateAddress = createAction(
  actionTypes.ADD_OR_UPDATE_ADDRESS,
  props<{ address: Iaddress }>()
);

export const deleteAddress = createAction(
  actionTypes.DELETE_ADDRESS,
  props<{ addressId: string }>()
);

export const updateUserProfile = createAction(
  actionTypes.UPDATE_USER_PROFILE,
  props<{ userProfile: IuserProfile }>()
);

export const updatePassword = createAction(
  actionTypes.UPDATE_PASSWORD,
  props<{ oldPassword: string; newPassword: string }>()
);
