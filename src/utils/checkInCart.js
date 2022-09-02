export const checkInCart = (cart, item) => {
  return cart.find((cart) => cart.id === item.id);
};
