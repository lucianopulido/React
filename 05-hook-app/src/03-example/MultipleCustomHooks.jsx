import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { state } = useFetch(url);
  const { author, quote } = !!state.data && state.data[0];

  return (
    <>
      <h1>Breaking Bad</h1>
      <hr />
      {state.isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote author={author} quote={quote} />
      )}
      <button
        className={"btn btn-primary"}
        disabled={state.isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
