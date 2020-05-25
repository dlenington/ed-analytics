import React, { Fragment } from "react";
import logo from "./logo.svg";
import Home from "./pages/home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
