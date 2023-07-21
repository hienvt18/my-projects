import { ADD_TO_CART,INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from "./actions";

const initialState = {
    cartItems: [],
    totalItems: 0,
  };
  
const cartReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          totalItems: state.totalItems + 1,
        };
      case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
            totalItems: state.totalItems - 1,
          };
      case INCREASE_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
      case DECREASE_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
      default:
        return state;
    }
};

export {initialState}
export default cartReducer
