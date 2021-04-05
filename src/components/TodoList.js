import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <section className="todo-list">
      {todos.map((todo) => {
        return (
          <Todo task={todo.task} key={todo.id} completed={todo.completed} />
        );
      })}
    </section>
  );
};

export default TodoList;
