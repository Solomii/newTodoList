import "./App.css";
import Todos from "./components/Todoes";
import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner",
        completed: true,
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };
  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
