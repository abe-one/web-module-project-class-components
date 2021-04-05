import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./styles.scss";

const initialTodos = [
  {
    task: "Open app",
    id: 1234567890122,
    completed: true,
  },
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

const initialTodoInput = "";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // constructor creating state: todoList
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
      todoInput: initialTodoInput,
    };
  }
  // class methods to update state: completed boolean, add items, remove items

  updateTodoInput = (input) =>
    this.setState({
      todoInput: input,
    });

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.todoInput,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  toggleCompleted = (id) => {
    const newTodos = this.state.todos.map((todo) =>
      id === todo.id ? { ...todo, completed: !todo.completed } : todo
    );
    return this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          input={this.state.todoInput}
          updateInput={this.updateTodoInput}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
