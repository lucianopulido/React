import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);

  const increment = useCallback(() => {
    setcounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
