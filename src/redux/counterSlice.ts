import {Action, createSlice} from "@reduxjs/toolkit";

export type CounterState = {
    count: number
}

let initialState: CounterState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'Counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.count++;
        }
    }
});

export const {increment} = counterSlice.actions;

export default counterSlice.reducer;
