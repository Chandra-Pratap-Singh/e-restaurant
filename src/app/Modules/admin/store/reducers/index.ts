import * as adminOrderReducer from './adminOrder.reducer';
import * as adminProductReducer from './adminProduct.reducer';

export const key = 'admin';

export interface IadminState {
  [adminOrderReducer.key]: adminOrderReducer.IadminOrderState;
  [adminProductReducer.key]: adminProductReducer.IadminProductState;
}

export const adminReducer = {
  [adminOrderReducer.key]: adminOrderReducer.adminOrderReducer,
  [adminProductReducer.key]: adminProductReducer.adminProductReducer,
};
