import { CLEAR_CART, REMOVE } from "./actions";

export const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return {...state, cart:new Map()}
    }
    if (action.type === REMOVE) {
        
        return {...state, cart:new Map()}
    }

    throw new Error(`NO MATCHING ACTION TYPE : ${action.type}`);
}