import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { removeTodos } from "../features/todoSlice";

const DisplayTodo = () => {
  const [sort, setSort] = useState("active");
  const todos = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {todos.length > 0 && sort === "active"
          ? todos.map((todo) => {
              return (
                todo.completed === false && (
                  <TodoItem
                    key={todo.id}
                    item={todo.item}
                    todo={todo}
                    id={todo.id}
                    removeTodo={(id) => dispatch(removeTodos(id))}
                  />
                )
              );
            })
          : null}
        {todos.length > 0 && sort === "completed"
          ? todos.map((todo) => {
              return (
                todo.completed === true && (
                  <TodoItem
                    key={todo.id}
                    item={todo.item}
                    todo={todo}
                    id={todo.id}
                    removeTodo={(id) => dispatch(removeTodos(id))}
                  />
                )
              );
            })
          : null}
        {todos.length > 0 && sort === "all"
          ? todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  item={todo.item}
                  todo={todo}
                  id={todo.id}
                  removeTodo={(id) => dispatch(removeTodos(id))}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default DisplayTodo;
