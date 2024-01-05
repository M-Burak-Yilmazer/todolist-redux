import { createSlice } from "@reduxjs/toolkit";

const initialState = { todolist: [] };

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        todolist: [
          ...state.todolist,
          { id: new Date().getTime(), item: action.payload, completed: false },
        ],
      };
    },
    removeTodos: (state, action) => {}
  },
});

export const { addTodo } = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;
