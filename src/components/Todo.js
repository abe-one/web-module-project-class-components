import React from "react";

const Todo = ({ task, id, completed, index, toggleCompleted }) => {
  const invokeToggleCompleted = () => toggleCompleted(id);
  let evenOdd = index % 2 === 0 ? "even" : "odd";
  let classNames = `todo-item ${evenOdd}`;
  console.log(classNames);
  return (
    <div
      className={completed ? (classNames += " completed") : classNames}
      onClick={invokeToggleCompleted}
      style={{ cursor: "pointer" }}
    >
      <p>{task}</p>
    </div>
  );
};

export default Todo;
