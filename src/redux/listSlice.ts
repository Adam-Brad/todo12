import { createSlice } from "@reduxjs/toolkit";
import StoreState from "../types/StoreState";
import { v4 as uuidv4 } from 'uuid';

const initialState: StoreState = {
  list: []
}

const listSlice = createSlice({
  name: 'List',
  initialState: initialState,
  reducers: {
    setAddTodo(state, action) {
      const todoToAdd = {
        text: action.payload,
        isCompleted: false,
        id: uuidv4()
      }
      state.list = [...state.list, todoToAdd];
    },
    setDeleteTodo(state, action) {
      const listAfterDelete = state.list.filter(todo => todo.id !== action.payload);
      state.list = [...listAfterDelete];
    }
  }
});

export const {setAddTodo, setDeleteTodo} = listSlice.actions;

export default listSlice.reducer;

