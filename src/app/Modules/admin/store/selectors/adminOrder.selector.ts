import { createSelector } from '@ngrx/store';
import { adminFeatureState } from './adminFeatureState';

export const adminActiveOrdersSelector = createSelector(
  adminFeatureState,
  (state) => state.adminOrders?.activeOrders || []
);

export const adminCompletedOrdersSelector = createSelector(
  adminFeatureState,
  (state) => state.adminOrders?.completedOrders || []
);

export const activeOrdersLoader = createSelector(
  adminFeatureState,
  (state) => state.adminOrders?.activeOrderLoader
);

export const completedOrdersLoader = createSelector(
  adminFeatureState,
  (state) => state.adminOrders?.completedOrderLoader
);

export const completedOrdersCountSelector = createSelector(
  adminFeatureState,
  (state) => state.adminOrders?.completedOrdersCount
);

export const rejectedOrdersCountSelector = createSelector(
  adminFeatureState,
  (state) => state.adminOrders?.rejectedOrdersCount
);
