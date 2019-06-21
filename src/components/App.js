import React, { Component } from "react";
import TasksList from "../containers/TasksList";
import TaskForm from "../containers/TaskForm";

class App extends Component {
  componentDidMount() {
    this.props.onAppReady();
  }
  render() {
    return (
      <div className="App">
        <TasksList />
        {this.props.isFormVisible && <TaskForm />}
      </div>
    );
  }
}

export default App;
