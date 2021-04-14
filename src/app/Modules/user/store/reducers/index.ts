import * as cartReducer from './cart.reducer';
import * as orderReducer from './order.reducer';
import * as userReducer from './user.reducer';
export const key = 'user';
export interface IuserReducer {
  [cartReducer.key]: cartReducer.IcartState;
  [orderReducer.key]: orderReducer.IorderState;
  [userReducer.key]: userReducer.IuserState;
}
export const reducer = {
  [cartReducer.key]: cartReducer.cartReducer,
  [orderReducer.key]: orderReducer.orderReducer,
  [userReducer.key]: userReducer.userReducer,
};
