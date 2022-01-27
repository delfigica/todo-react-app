import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

import { TodosList } from "../components/TodosList";
import { TodoForm } from "./TodoForm";

import "../style.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleCheck = (todoId) => {
    dispatch({
      type: "check",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1 className="text-center">ToDo React app ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodosList
            todos={todos}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        </div>
        <div className="col-5">
            <TodoForm handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};
