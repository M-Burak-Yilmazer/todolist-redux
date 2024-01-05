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
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{ scale: 0.9, transition: { type: "spring", duration: 0.1 } }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,0.1)",
      }}
      key={id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={true}
        defaultValue={item}
        onKeyDown={(e) => update(id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={changeFocus}
        >
          <FaRegEdit style={{ color: "#0d3b66" }} />
        </motion.button>
        {todo.completed === false && (
          <motion.button
            whileHover={{ scale: 1.3 }}
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
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => removeTodo(id)}
        >
          <RiDeleteBin5Fill />
        </motion.button>
      </div>
      {todo.completed === true && <span className="completed">Done</span>}
    </motion.li>
  );
};
export default TodoItem;
