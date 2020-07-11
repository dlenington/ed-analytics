import React, { Fragment } from "react";
import logo from "./logo.svg";
import Home from "./pages/home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Detail from "./pages/detail";
import Profile from "./pages/profile";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/school" component={Detail} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
