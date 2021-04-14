export const getTotalPrice = (items) =>
  items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
