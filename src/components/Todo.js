import React from "react";

const Todo = ({ task, id, completed }) => {
  const invokeToggleComleted = () => {
    alert("hey");
  };

  return (
    <div
      className={completed ? "completed" : ""}
      onClick={invokeToggleComleted}
    >
      <p>{task}</p>
    </div>
  );
};

export default Todo;
