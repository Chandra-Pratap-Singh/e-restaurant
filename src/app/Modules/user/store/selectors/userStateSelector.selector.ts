import { createFeatureSelector } from '@ngrx/store';
import * as userReducer from '../reducers';
export interface Iappstate {
  [userReducer.key]: userReducer.IuserReducer;
}

export const userStateSelector = createFeatureSelector<
  Iappstate,
  userReducer.IuserReducer
>(userReducer.key);
