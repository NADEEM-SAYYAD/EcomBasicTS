import { useReducer } from "react";
import { CounterState } from "./Counter.type";
import { Action } from "./Counter.type";

const initialState = {
    count: 0,
};

const reducer = (
    state: CounterState,
    action: Action
) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.payload,
            };
        case "DECREMENT":
            return {
                count: state.count - action.payload,
            };
        case "RESET":
            return initialState;
    }
};


const CounterReducer = () => {
    const [counter, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count {counter.count}</p>
            <button
                onClick={(e) => dispatch({ type: "INCREMENT", payload: 1 })}
            >
                Increment
            </button>
            <button
                onClick={(e) => dispatch({ type: "DECREMENT", payload: 1 })}
            >
                Decrement
            </button>
            <button onClick={(e) => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
};
export default CounterReducer;
