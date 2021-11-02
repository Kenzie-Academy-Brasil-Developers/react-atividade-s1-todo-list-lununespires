import { GrCheckbox } from "react-icons/gr";

function ToDoList({ list, handleTodo }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li className="item" key={index}>
          {item}
          <button onClick={() => handleTodo(item)}>
            <GrCheckbox />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
