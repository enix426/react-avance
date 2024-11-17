// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment: (state) => {
            state.counter += 1; // Immer permet des mutations sûres.
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
