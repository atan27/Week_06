import React, { Component } from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todos: [
        "thing 1",
        "thing 2",
        "thing 3",
        "thing 4",
        "thing 5",
        "thing 6"
      ],
    };
  }
  render() {
    return ( <div>
        <h2>Home</h2>
        {this.state.todos.map(todo => (
          <li key={todo}>
          {todo + " "}
          </li>
        ))}
      </div>);
  }
}

export default Home;