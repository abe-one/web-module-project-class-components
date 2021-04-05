import React from "react";

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-list">
          {this.state.todos.map((todo) => {
            return <div className="todo-item">{todo.task}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
