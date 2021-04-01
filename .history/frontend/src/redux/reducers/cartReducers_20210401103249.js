import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.

    default:
      return state;
  }
};
