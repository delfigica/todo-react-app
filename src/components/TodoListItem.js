import React from "react";

export const TodoListItem = ({ todo, handleCheck, handleDelete }) => {
  return (
    <div className="card mt-4">
      <p className="card-title text-center m-3">
        <b>{todo.desc}</b>
      </p>
      {todo.done ? (
        <p className="text-center text-success">COMPLETE</p>
      ) : (
        <p className="text-center text-danger">INCOMPLETE</p>
      )}
      <div className="btn-box">
        <button
          className="btn btn-outline-danger text-center"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => handleCheck(todo.id)}
        >
          {todo.done ? "Incomplete" : "Complete"}
        </button>
      </div>
    </div>
  );
};
