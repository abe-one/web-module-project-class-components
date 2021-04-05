import React from "react";

const TodoForm = ({ input, updateInput, addTodo, clearCompleted }) => {
  // Invoked functions
  const invokeUpdateInput = (e) => updateInput(e.target.value);

  const invokeAddTodo = (e) => {
    e.preventDefault();
    addTodo();
  };

  const invokeClearCompleted = (e) => {
    clearCompleted();
  };

  return (
    <form className="todo-form" onSubmit={invokeAddTodo}>
      <input
        name="todoInput"
        type="string"
        value={input}
        onChange={invokeUpdateInput}
        placeholder="Add something to do"
      />
      <div className="form-buttons">
        <button type="submit">Add Todo</button>
        <button type="button" onClick={invokeClearCompleted}>
          Clear Completed
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
