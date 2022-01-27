import React from "react";
import { TodoListItem } from "../components/TodoListItem";

export const TodosList = ({ todos, handleDelete, handleCheck }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck}/>
      ))}
    </>
  );
};
