import { createReducer, on } from '@ngrx/store';
import { Iuser } from '../../modal/interfaces/Iuser.interface';
import {
  addOrUpdateAddress,
  deleteAddress,
  fetchUser,
  loadUser,
  updateActiveAddress,
  updatePassword,
  updateUserProfile,
} from '../actions/user.action';

export const key = 'userState';

export interface IuserState {
  user?: Iuser;
  deleteAddressLoader: boolean;
  addOrUpdateAddressLoader: boolean;
  addressListLoader: boolean;
  updateUserProfileLoader: boolean;
  fetchUserLoader: boolean;
  updatePasswordLoader: boolean;
}

let initialState: IuserState = {
  deleteAddressLoader: false,
  addOrUpdateAddressLoader: false,
  addressListLoader: false,
  updateUserProfileLoader: false,
  fetchUserLoader: false,
  updatePasswordLoader: false,
};

export const userReducer = createReducer(
  initialState,
  on(updateActiveAddress, (state, { name, identifier }) => ({
    ...state,
    user: {
      ...state.user,
      addresses: state.user.addresses.map((address) => ({
        ...address,
        isPrimary: address.identifier === identifier && address.name === name,
      })),
    },
  })),
  on(loadUser, (state, { user }) => ({
    ...state,
    user: { ...state?.user, ...user },
    deleteAddressLoader: false,
    addOrUpdateAddressLoader: false,
    addressListLoader: false,
    updateUserProfileLoader: false,
    fetchUserLoader: false,
    updatePasswordLoader: false,
  })),
  on(addOrUpdateAddress, (state) => ({
    ...state,
    addOrUpdateAddressLoader: true,
  })),
  on(deleteAddress, (state) => ({ ...state, deleteAddressLoader: true })),
  on(fetchUser, (state) => ({
    ...state,
    addressListLoader: true,
    fetchUserLoader: true,
  })),
  on(updateUserProfile, (state) => ({
    ...state,
    updateUserProfileLoader: true,
  })),
  on(updatePassword, (state) => ({ ...state, updatePasswordLoader: true }))
);
