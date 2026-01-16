import React, { useState } from "react";
import "./todo-app.css";

function Todolist() {
  const [todo, setTodo] = useState([]);
  const [newtodo, setNewtodo] = useState("");
  const handleAddtodo = () => {
    if (newtodo.trim() !== "") setTodo([...todo, { text: newtodo.trim() }]);
    setNewtodo("");
  };
  const handleDeletetodo = (index) => {
    const newtodo = [...todo];
    newtodo.splice(index, 1);
    setTodo(newtodo);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand"> TODO APP </h1>
        </div>
      </nav>
      <div className="container mt-5">
        <h1 className="text-center">Todolist</h1>
        <input
          type="text"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
            placeholder="Enter a new task"
            className="form-control mb-3"
          />
        <button onClick={handleAddtodo} className="btn btn-primary">Add</button>
        <ul className="list-group mt-3">
          {todo.map((todo, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {todo.text}
              <button onClick={() => handleDeletetodo(index)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Todolist;
