// import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PostFeed from "./PostFeed";
import Topbar from "./Topbar";
import Home from "./pages/home/Home";
import Write from "./pages/Write";
import Settings from "./pages/settings/Settings";

import Post from "./Post";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <PostFeed />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
