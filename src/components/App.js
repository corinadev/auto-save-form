import React, { Component } from "react";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import TasksPage from "../pages/Tasks";
import CreateTaskPage from "../pages/CreateTask";
import EditTaskPage from "../pages/EditTask";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <nav className="mainNavigation">
          <ul>
            <li>
              <NavLink to="/">Tasks</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tasks" exact component={TasksPage} />
          <Route path="/tasks/edit/:taskId" exact component={EditTaskPage} />
          <Route path="/tasks/create" exact component={CreateTaskPage} />
          <Redirect from="/" to="tasks" />
        </Switch>
      </div>
    );
  }
}

export default App;
