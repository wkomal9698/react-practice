import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            // Vanilla (Old) Redux - Don't mutate state and return was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux Toolkit (Now) - Mutating the state here and return is not mandatory
            // Redux is using vanilla redux code behind the scenes but it makes developer's life simple - Immer library is used for this
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // For now, just popping the latest one... TODO: Write logic to pop particular element
            state.items.pop();
        },
        clearCart: (state) => {
            // console.log(state);
            // console.log(current(state));
            // state = [];
            // console.log(state);

            // RTK says either mutate the existing state or return a new state
            state.items.length = 0;
            // or
            // return {items: []};
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;