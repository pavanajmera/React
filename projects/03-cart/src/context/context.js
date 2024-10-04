import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducer';
import cartItems from '../data';
import { CLEAR_CART, REMOVE } from '../actions';

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item]))
}

const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    const removeItem = (id) => {
        dispatch({type:REMOVE, payload:{id}})
    }

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext);
}
