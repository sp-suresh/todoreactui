import  React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './components/Main'

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Main} />
    </div>
  </Router>
);

export default AppRouter;
