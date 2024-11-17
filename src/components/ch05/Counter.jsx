// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Compteur : {counter}</h1>
            <button onClick={() => dispatch({ type: 'counter/increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
        </div>
    );
};

export default Counter;
