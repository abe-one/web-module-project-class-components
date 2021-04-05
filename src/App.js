import React from "react";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const initialTodos = [
  {
    task: "List things to do",
    id: 1234567890123,
    completed: false,
  },
  {
    task: "Check off things to do",
    id: 1234567890124,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // constructor creating state: todoList
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
    };
  }
  // class methods to update state: completed boolean, add items, remove items

  addTodo = () => {};

  toggleCompleted = () => {};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
