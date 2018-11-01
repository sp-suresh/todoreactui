import  React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './components/About'
import TodoList from './components/TodoList'
const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={TodoList} />
      <Route path="/about/" component={About} />
      <Route path="/todolist/" component={TodoList} />
    </div>
  </Router>
);

export default AppRouter;
