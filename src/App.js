import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todoes";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: "Take out the trash",
      //   completed: false,
      // },
      // {
      //   id: uuidv4(),
      //   title: "Dinner",
      //   completed: false,
      // },
      // {
      //   id: uuidv4(),
      //   title: "Meeting with boss",
      //   completed: false,
      // },
    ],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      complete: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
