import React from "react";

const Todo = ({ task, id, completed, index, toggleCompleted }) => {
  const invokeToggleCompleted = () => toggleCompleted(id);
  let lineOdd = index % 2 === 0 ? "even" : "odd";
  let classNames = lineOdd + ", todo-item";
  console.log(classNames);
  return (
    <div
      className={completed ? (classNames += ", completed") : classNames}
      onClick={invokeToggleCompleted}
      style={{ cursor: "pointer" }}
    >
      <p>{task}</p>
    </div>
  );
};

export default Todo;
