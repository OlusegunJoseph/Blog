import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostFeed from "./PostFeed";
import Header from "./Header";
import Topbar from "./Topbar";

import React from "react";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Topbar />
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
