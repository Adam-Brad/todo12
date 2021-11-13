import { createSlice } from "@reduxjs/toolkit";
import StoreState from "../types/StoreState";
import { v4 as uuidv4 } from 'uuid';
import Todo from "../types/Todo";

const initialState: StoreState = {
  list: []
}

interface EditTodoAction {
  type: string;
  payload: Todo;
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
    setEditTodo(state, action: EditTodoAction) {
      const listAfterEdit = state.list.map(todo => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
      state.list = [...listAfterEdit];
    },
    setDeleteAllCompleted(state) {
      state.list = [...state.list.filter(todo => !todo.isCompleted)];
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

