import {createContext, useReducer} from 'react'
import cartReducer, {initialState} from './CartReducer';

import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from './actions';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
      };
    
      const removeFromCart = (product) => {
        dispatch({ type: REMOVE_FROM_CART, payload: product });
      };
    
      const increaseQuantity = (product) => {
        dispatch({ type: INCREASE_QUANTITY, payload: product });
      };
    
      const decreaseQuantity = (product) => {
        dispatch({ type: DECREASE_QUANTITY, payload: product });
      };
    
      const calculateCartTotal = () => {
        const total = state.cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        return total.toFixed(2); // Assuming the prices have two decimal places
      };

    return (
        <CartContext.Provider value={{   
            state,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            calculateCartTotal, }}>
            {children}
        </CartContext.Provider>
    )
}

