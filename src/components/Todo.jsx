import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  console.log("todo", todo);

  return (
    <div className="addTodo">
      <input
        type="text"
        className="todo-input"
        onChange={handleChange}
        value={todo}
      />

      <button className="add-btn">Add</button>
    </div>
  );
};

export default Todo;
