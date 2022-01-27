import React from "react";
import { useFrom } from "../hooks/useForm";

export const TodoForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useFrom({
    description: "",
  });

  const handleSubmit = (e) => {
      e.preventDefault();

      if( description.trim().length <= 1 ) {
          return;
      }
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
      handleAddTodo(newTodo);
      reset();
  }
  return (
    <>
      <h3 className="text-center">Add todo</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="write a todo"
          className="form-control"
          onChange={handleInputChange}
          value={description}
          autoComplete="off"
        />
        <button type="submit" className="btn btn-outline-dark mt-2 w-100">
          Add
        </button>
      </form>
    </>
  );
};
