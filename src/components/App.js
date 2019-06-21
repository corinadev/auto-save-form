import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import TasksPage from "../pages/Tasks";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav class="mainNavigation">
              <ul>
                <li>
                  <NavLink to="/">Tasks</NavLink>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={TasksPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
