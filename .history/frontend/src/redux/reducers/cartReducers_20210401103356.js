import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if(existItem) {
          return  {
              ...state,
              cartItems: state.cartItems.map((x) => x.product === existItem)
          }
      }

    default:
      return state;
  }
};
