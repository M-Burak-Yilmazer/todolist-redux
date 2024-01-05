import { useDispatch } from "react-redux";
import { completeTodos, updateTodos } from "../features/todoSlice";
import { useRef } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={changeFocus}
        >
          <FaRegEdit style={{ color: "#0d3b66" }} />
        </motion.button>
        {todo.completed === false && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              dispatch(completeTodos(id));
            }}
          >
            <IoCheckmarkDoneCircle style={{ color: "#2c6e49" }} />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => removeTodo(id)}
        >
          <RiDeleteBin5Fill />
        </motion.button>
      </div>
      {todo.completed === true && <span className="completed">Done</span>}
    </li>
  );
};
export default TodoItem;
