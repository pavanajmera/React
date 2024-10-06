import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducer';
import cartItems from '../data';
import { CLEAR_CART, DECREASE, DISPLAY_ITEMS, INCREASE, LOADING, REMOVE } from '../actions';
import { getTotals } from '../utils/utils';

const apiURL = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: new Map()
    // cart: new Map(cartItems.map((item) => [item.id, item]))
}

const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const {totalAmount, totalCost} = getTotals(state.cart);

    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    const removeItem = (id) => {
        dispatch({type:REMOVE, payload:{id}})
    }

    const increase = (id) => {
        dispatch({type: INCREASE, payload:{id}})
    }

    const decrease = (id) => {
        dispatch({type: DECREASE, payload:{id}})
    }

    const fetchData =  async () => {
        dispatch({type: LOADING});
        const response = await fetch(apiURL);
        const cart = await response.json();
        dispatch({type:DISPLAY_ITEMS, payload:{cart}})
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext);
}
