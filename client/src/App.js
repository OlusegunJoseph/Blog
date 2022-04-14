import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostFeed from "./PostFeed";
import Header from "./Header";

import React from "react";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <PostFeed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
