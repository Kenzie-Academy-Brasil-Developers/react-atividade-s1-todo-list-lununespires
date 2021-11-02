import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo === "") {
      return;
    }
    setList([...list, newTodo]);
  };

  const handleTodo = (toDo) => {
    return setList(list.filter((item) => item !== toDo));
  };

  return (
    <>
      <section className="toDo">
        <h2>My To Do list</h2>
        <Form addTodo={addTodo} />
      </section>
      <section className="remove-toDo">
        <TodoList list={list} handleTodo={handleTodo} />
      </section>
    </>
  );
}

export default App;
