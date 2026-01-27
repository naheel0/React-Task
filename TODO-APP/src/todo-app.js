import React, { useReducer, useState } from "react";

export default function Todos() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (action.tasks.trim() === "") return state;
        return [...state, action.tasks.trim()];

      case "delete":
        return state.filter((_, i) => i !== action.index);

      case "edit":
        return state.map((task, i) =>
          i === action.index ? action.tasks : task
        );

      default:
        return state;
    }
  };

  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const add = () => {
    if (editIndex !== null) {
      dispatch({ type: "edit", index: editIndex, tasks: input });
      setEditIndex(null);
    } else {
      dispatch({ type: "add", tasks: input });
    }
    setInput("");
  };

  const del = (index) => {
    dispatch({ type: "delete", index });
  };

  const edit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Todo List</h3>
            </div>
            <div className="card-body">
              {/* Input Section */}
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter a task..."
                  aria-label="Enter a task"
                />
                <button 
                  className={`btn ${editIndex !== null ? "btn-warning" : "btn-success"}`}
                  onClick={add}
                  disabled={!input.trim()}
                >
                  {editIndex !== null ? (
                    <>
                      <i className="bi bi-pencil-square me-2"></i>
                      Update
                    </>
                  ) : (
                    <>
                      <i className="bi bi-plus-circle me-2"></i>
                      Add
                    </>
                  )}
                </button>
              </div>

              {/* Tasks List */}
              {tasks.length === 0 ? (
                <div className="text-center py-4">
                  <i className="bi bi-clipboard-check display-4 text-muted mb-3"></i>
                  <p className="text-muted">No tasks yet. Add your first task above!</p>
                </div>
              ) : (
                <ul className="list-group">
                  {tasks.map((task, i) => (
                    <li 
                      key={i} 
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <span className="badge bg-primary rounded-pill me-3">
                          {i + 1}
                        </span>
                        <span className={editIndex === i ? "text-warning fw-bold" : ""}>
                          {task}
                        </span>
                      </div>
                      <div>
                        <button 
                          className="btn btn-outline-primary btn-sm me-2"
                          onClick={() => edit(i)}
                        >
                          <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => del(i)}
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stats */}
              {tasks.length > 0 && (
                <div className="mt-4">
                  <div className="alert alert-info d-flex justify-content-between align-items-center">
                    <span>
                      <i className="bi bi-list-check me-2"></i>
                      Total Tasks: <strong>{tasks.length}</strong>
                    </span>
                    {editIndex !== null && (
                      <span className="badge bg-warning text-dark">
                        <i className="bi bi-exclamation-triangle me-1"></i>
                        Editing task #{editIndex + 1}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="card-footer text-muted text-center">
              <small>
                <i className="bi bi-info-circle me-1"></i>
                Press Enter to add tasks • Click Edit to modify • Delete to remove
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
