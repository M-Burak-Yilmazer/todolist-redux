import "./css/main.css";
import DisplayTodo from "./components/DisplayTodo";
import Todo from "./components/Todo";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        whileHover={{ scale: 1.1 }}
        style={{fontSize:"3rem" , display:"flex", alignItems:"center",justifyContent:   "center"
        }}
      >
      <img style={{width:"60px"}} src="./redux.png" alt="redux png" />
        ToDo App
      </motion.h1>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1}}
      >
        <Todo />
        <DisplayTodo />
      </motion.div>
    </div>
  );
}

export default App;
