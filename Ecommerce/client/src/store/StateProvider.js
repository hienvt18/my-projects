import {createContext, useReducer} from 'react'
import reducer, {initialState} from './reducer';

import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART, SET_USER } from './actions';

export const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setUser = () => {
      dispatch({ type: SET_USER, payload: [] })
    }

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
        <StateContext.Provider value={{   
            state,
            setUser,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            calculateCartTotal, }}>
            {children}
        </StateContext.Provider>
    )
}

