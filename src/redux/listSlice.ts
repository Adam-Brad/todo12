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
      state.list = [...state.list.filter(todo => todo.id !== action.payload)];
    },
    setToggleComplete(state, action) {
      const listAfterToggle = state.list.map(todo => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      state.list = [...listAfterToggle];
    },
    setEditTodo(state, action) {
      const listAfterEdit = state.list.map(todo => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
      state.list = [...listAfterEdit];
    },
    setDeleteAllCompleted(state) {
      const listAfterDeleteAllCompleted = state.list.filter(todo => {
        if (!todo.isCompleted) {
          return todo;
        }
      });
      console.log(listAfterDeleteAllCompleted)
      state.list = [...listAfterDeleteAllCompleted];
    }
  }
});

export const {
  setAddTodo,
  setDeleteTodo,
  setToggleComplete,
  setEditTodo,
  setDeleteAllCompleted
} = listSlice.actions;

export default listSlice.reducer;

