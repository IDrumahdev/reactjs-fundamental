import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    },
});

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

console.log("On Create Store : ", store.getState());

store.subscribe(() => {
    console.log("Store Change : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 102}));
store.dispatch(cartSlice.actions.addToCart({id: 2, qty: 120}));