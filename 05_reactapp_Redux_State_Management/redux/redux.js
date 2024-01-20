// Reducer
import { legacy_createStore } from "redux";

const cartReducer = (
    state = {
        cart: [{
            id: 1,
            qty: 12
        }]
    },
    action
) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return state
    }
}

// Store
const store = legacy_createStore(cartReducer);
console.log("On Create Store : ", store.getState());

// Subscriber
store.subscribe(() => {
    console.log("Store Change : ", store.getState());
});

// Dispatch
const action = {type: "ADD_TO_CART", payload: {id: 2, qty: 24}};
store.dispatch(action);

const createData = {type: "ADD_TO_CART", payload: {id: 3, qty: 31}};
store.dispatch(createData);

console.log("On Dispatch : ", store.getState());