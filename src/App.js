import React, { Fragment } from "react";
import logo from "./logo.svg";
import Home from "./pages/home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Detail from "./pages/detail";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/school" component={Detail} />
          <Route exact path="/profile" component={} />
          <Route exact path="/login" component={} />
          <Route exact path="/signup" component={} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
