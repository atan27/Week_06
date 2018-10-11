import React, { Component } from "react";

class About extends React.Component {
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

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <h2>About</h2>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}</li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
        </form>
      </div>
    );
  }
}

export default About;
