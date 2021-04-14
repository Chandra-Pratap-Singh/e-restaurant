export const toastTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
  DEFAULT: 'default',
};

export const toastTypeToClassMapping = {
  [toastTypes.SUCCESS]: 'alert alert-success',
  [toastTypes.ERROR]: 'alert alert-danger',
  [toastTypes.DEFAULT]: 'alert alert-primary',
};

export const loaderVarients = {
  FOOD: 'food',
  DEFAULT: 'defalt',
};

export const loaderVarientMapping = {
  [loaderVarients.FOOD]: `assets/food-loader.gif`,
};
