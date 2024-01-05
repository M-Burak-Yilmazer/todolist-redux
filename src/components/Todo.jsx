import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodos, updateTodos } from "../features/todoSlice";

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
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo.item}
            id={todo.id}
            removeTodo={(id) => dispatch(removeTodos(id))}
          />
        ))}
      </ul>
    </form>
  );
};

const TodoItem = ({ item, id, removeTodo }) => {
  const inputRef = useRef(null);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodos({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li>
      <textarea
        ref={inputRef}
        disabled={true}
        defaultValue={item}
        onKeyDown={(e) => update(id, inputRef.current.value, e)}
      />
      <button type="button" onClick={changeFocus}>
        Edit
      </button>
      <button type="button" onClick={() => removeTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
