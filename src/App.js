import React from "react";
import logo from "./logo.svg";
import Home from "./pages/home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";

function App() {
  return 
  <NavBar/>
  <main className="container">
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </main>;
}

export default App;
