import { useState } from "react";

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new to do"
        value={userInput}
        required="required"
        onChange={handleChange}
      />
      <button onClick={() => addTodo(userInput)}>add task</button>
    </form>
  );
}

export default Form;
