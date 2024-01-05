import { useDispatch } from "react-redux";
import { completeTodos, updateTodos } from "../features/todoSlice";
import { useRef } from "react";

const TodoItem = ({ item, id, removeTodo, todo }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodos({ id, item: value }));
      inputRef.current.disabled = true;
    }
  };
  console.log(todo.completed);

  return (
    <li key={id} className="card">
      <textarea
        ref={inputRef}
        disabled={true}
        defaultValue={item}
        onKeyDown={(e) => update(id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button type="button" onClick={changeFocus}>
          Edit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(completeTodos(id));
          }}
        >
          Complete
        </button>
        <button type="button" onClick={() => removeTodo(id)}>
          Delete
        </button>
      </div>
      {todo.completed === true && <span className="completed">Done</span>}
    </li>
  );
};
export default TodoItem;
