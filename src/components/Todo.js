import React from "react";

const Todo = ({ task, id, completed, toggleCompleted }) => {
  const invokeToggleCompleted = () => toggleCompleted(id);

  return (
    <div
      className={completed ? "completed" : ""}
      onClick={invokeToggleCompleted}
    >
      <p>{task}</p>
    </div>
  );
};

export default Todo;
