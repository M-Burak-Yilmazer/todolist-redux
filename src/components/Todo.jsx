import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addBtn = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  const todos = useSelector((state) => state);
  console.log(todos.todolist);

  return (
    <form onSubmit={addBtn} className="addTodo">
      <input
        type="text"
        className="todo-input"
        onChange={handleChange}
        value={todo}
      />

      <button type="submit" className="add-btn">
        Add
      </button>
      <br />
      <ul>
        {todos.todolist.map(({ item, id }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </form>
  );
};

export default Todo;
