import React from 'react';
import {useCounter} from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter()
    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr/>
            <button className={"btn btn-primary"} onClick={event => increment(2)}>+1</button>
            <button className={"btn btn-primary"} onClick={event => decrement(2)}>-1</button>
            <button className={"btn btn-primary"} onClick={reset}>Reset</button>
        </>
    );
};


