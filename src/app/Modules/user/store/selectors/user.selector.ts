import { createSelector } from '@ngrx/store';
import * as userReducer from '../reducers';
import { userStateSelector } from './userStateSelector.selector';

export const userSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state?.userState?.user
);

export const userAdressSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state?.userState?.user?.addresses
);

export const userActiveAddressSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) =>
    state?.userState?.user?.addresses?.find((address) => address?.isPrimary)
);

export const addressSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer, { addressId }) =>
    state?.userState?.user?.addresses?.find(
      (item) => item.addressId === addressId
    )
);

export const deleteAddressLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.userState?.deleteAddressLoader
);

export const addOrUpdateAddressLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.userState?.addOrUpdateAddressLoader
);

export const addressListLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.userState?.addressListLoader
);

export const userProfileUpdateLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.userState?.updateUserProfileLoader
);

export const fetchUserLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.userState?.fetchUserLoader
);

export const updatePasswordLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.userState?.updatePasswordLoader
);
