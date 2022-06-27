export const CartReducer = (state, action) => {
  const { shoppingCart, total, qty } = state;

  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((item) => item.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = total + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          total: updatedPrice,
          qty: updatedQty,
        };
      }

    case "INC":
      product = action.cart;
      product.qty = product.qty + 1;
      updatedPrice = total + product.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((item) => item.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        total: updatedPrice,
        qty: updatedQty,
      };

    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = total - product.price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((item) => item.id === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          total: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }

    case "REMOVE":
      const filtered = shoppingCart.filter((item) => item.id !== action.id);
      product = action.cart;
      updatedPrice = total - product.price * product.qty;
      updatedQty = qty - product.qty;
      return {
        shoppingCart: [...filtered],
        total: updatedPrice,
        qty: updatedQty,
      };

    case "EMPTY":
      return {
        shoppingCart: [],
        total: 0,
        qty: 0,
      };

    default:
      return state;
  }
};
