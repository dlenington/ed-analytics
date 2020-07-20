import React, { Fragment } from "react";
import {ThemeProvider} from '@material-ui/core/styles';
import themeFile from './util/themeFile';
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";


import Detail from "./pages/detail";
import Profile from "./pages/profile";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./pages/home";

const theme = themeFile;
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
    
  );
}

export default App;
