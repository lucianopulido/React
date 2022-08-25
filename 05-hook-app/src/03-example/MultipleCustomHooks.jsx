import {useFetch} from "../hooks/useFetch";
import {useCounter} from "../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    const {state} = useFetch(url)
    const {author, quote} = !!state.data && state.data[0]

    return (
        <>
            <h1>Breaking Bad</h1>
            <hr/>

            {
                state.isLoading ? (
                    <div className={"alert alert-info text-center"}>
                        Loading...
                    </div>
                ) : <blockquote className={"blockquote text-end"}>
                    <p className={"mb-1"}>{quote}</p>
                    <footer className={"blockquote-footer"}>{author}</footer>
                </blockquote>
            }

            <button className={"btn btn-primary"} disabled={state.isLoading} onClick={() => increment()}>Next Quote
            </button>


        </>
    )
}