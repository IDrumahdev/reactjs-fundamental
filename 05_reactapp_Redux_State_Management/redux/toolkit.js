import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCard = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCard, (state, action) => {
        state.push(action.payload);
    });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status : false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
})

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    },
});

console.log("On Create Store : ", store.getState());

store.subscribe(() => {
    console.log("Store Change : ", store.getState());
});

store.dispatch(addToCard({ id: 1, qty: 24 }));
store.dispatch(addToCard({ id: 2, qty: 42 }));
store.dispatch(login());
