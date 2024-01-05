import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { removeTodos } from "../features/todoSlice";
import { AnimatePresence, motion } from "framer-motion";

const DisplayTodo = () => {
  const [sort, setSort] = useState("active");
  const todos = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
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
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodo;
