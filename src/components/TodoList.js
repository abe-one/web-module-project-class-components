import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleted }) => {
  return (
    <section className="todo-list">
      {todos.map((todo) => {
        return (
          <Todo
            task={todo.task}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
