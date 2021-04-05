import React from "react";

const TodoForm = ({ input, updateInput, addTodo }) => {
  const invokeUpdateInput = (e) => updateInput(e.target.value);
  const invokeAddTodo = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <form onSubmit={invokeAddTodo}>
      <input
        name="todoInput"
        type="string"
        value={input}
        onChange={invokeUpdateInput}
        placeholder="Add something to do"
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
