import { createContext, useContext, useReducer } from 'react';

const TotalPriceContact = createContext(null);

const TotalPriceDispatchContact = createContext(null);

const TotalPriceReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TOTAL_PRICE':
            return {
                total: action.payload.total
            };
        default:
            throw Error('Unknown action : ' + action.type);
    }
}

export function TotalPriceProvider ({ children }) {
    const [TotalPrice, dispatch] = useReducer(TotalPriceReducer, {
        total: 0
    });
    return (
        <TotalPriceContact.Provider value={TotalPrice}>
            <TotalPriceDispatchContact.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContact.Provider>
        </TotalPriceContact.Provider>
    ); 
}

export function useTotalPrice () {
    return useContext(TotalPriceContact);
}

export function useTotalPriceDispatch () {
    return useContext(TotalPriceDispatchContact);
}