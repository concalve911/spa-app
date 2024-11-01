import { useState } from "react";
import "./home.scss";

export default () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <div className="todo__input-container">
        <input
          type="text"
          className="todo__input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Your task"
        />
        <button className="todo__button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="todo__list">
        {todos.map((todo, index) => (
          <li key={index} className="todo__item">
            {todo}
            <button
              className="todo__delete-button"
              onClick={() => handleDeleteTodo(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
