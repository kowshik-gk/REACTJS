// src/Components/CounterOne.js
import React, { createContext, useReducer } from 'react';
import ContextComponent1 from './ContextComponent1';

const initialState = {
    firstCount: 0,
    Name: "kowshik"
};

const reducer = (currentState, action) => {
    switch (action) {
        case 'inc':
            return { ...currentState, firstCount: currentState.firstCount + 1 };
        case 'dec':
            return { ...currentState, firstCount: currentState.firstCount - 1 };
        case 'reset':
            return { ...currentState, firstCount: 0 };
        default:
            return currentState;
    }
};

const contextState = createContext();

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <contextState.Provider value={{ count, dispatch }}>
            <div>
                <h1>Count - {count.firstCount}</h1>
                <button onClick={() => dispatch('inc')}>Increment</button>
                <button onClick={() => dispatch('dec')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
                <h1>{initialState.firstCount}</h1>
                <ContextComponent1 />
            </div>
        </contextState.Provider>
    );
}

export { CounterOne, contextState };
