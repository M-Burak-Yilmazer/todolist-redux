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
    removeTodos: (state, action) => {
      return {
        todolist: state.todolist.filter((item) => item.id !== action.payload),
      };
    },
    updateTodos: (state, action) => {
      return {
        todolist: state.todolist.map((list) => {
          if (list.id === action.payload.id) {
            return {
              ...list,
              item: action.payload.item,
            };
          }
          return list;
        }),
      };
    },
  },
});

export const { addTodo, removeTodos, updateTodos } = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;
