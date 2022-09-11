import React, { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iteratorNumber = 100) => {
  for(let i = 0; i<iteratorNumber;i++){
    console.log('Ahí vamos...')
  }
  return `${iteratorNumber} iteraciones realizadas`
};

export const MemoHook = () => {

  const { counter, increment } = useCounter(4000);
  const [show, setshow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter:<small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
