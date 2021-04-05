import React from "react";

const TodoList = ({ todos }) => {
  return (
    <section className="todo-list">
      {todos.map((todo) => {
        return <div className="todo-item">{todo.task}</div>;
      })}
    </section>
  );
};

export default TodoList;
