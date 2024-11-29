// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer, // Combiner plusieurs reducers si nécessaire
    },
});

export default store;
