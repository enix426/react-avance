// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter); // Notez la structure de l'état.
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Compteur : {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;
