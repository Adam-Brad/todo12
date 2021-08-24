import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, CounterState} from "../redux/counterSlice";

function Counter() {
    const dispatch = useDispatch();

    const count = useSelector((state: CounterState) =>  state.count);

    function performIncrement() {
        dispatch(increment());
    }

    return (
        <div>
            <div>Current count: {count}</div>
            <button onClick={performIncrement}>Increment</button>
        </div>
    );
}

export default Counter;
