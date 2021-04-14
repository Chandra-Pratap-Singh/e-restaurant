import { createFeatureSelector } from '@ngrx/store';
import * as adminReducer from '../reducers';

interface IappState {
  [adminReducer.key]: adminReducer.IadminState;
}

export const adminFeatureState = createFeatureSelector<
  IappState,
  adminReducer.IadminState
>(adminReducer.key);
