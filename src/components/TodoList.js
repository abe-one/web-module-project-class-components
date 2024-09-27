import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleted }) => {
  return (
    <section className="todo-list">
      {todos.map((todo, index) => {
        return (
          <Todo
            task={todo.task}
            key={todo.id}
            id={todo.id}
            index={index}
            completed={todo.completed}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
