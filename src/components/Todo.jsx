import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  //   completeTodos,
  //   removeTodos,
  //   updateTodos,
} from "../features/todoSlice";
// import TodoItem from "./TodoItem";

import { MdPlaylistAddCircle } from "react-icons/md";
import { motion } from "framer-motion";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todolist);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addBtn = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  console.log(todos);
  return (
    <form onSubmit={addBtn} className="addTodo">
      <input
        type="text"
        className="todo-input"
        onChange={handleChange}
        value={todo}
      />
      <motion.button type="submit" className="add-btn">
        <MdPlaylistAddCircle style={{ fontSize: "2rem" }} />
      </motion.button>
      <br />
      {/* <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo.item}
            id={todo.id}
            removeTodo={(id) => dispatch(removeTodos(id))}
          />
        ))}
      </ul> */}
    </form>
  );
};

export default Todo;
