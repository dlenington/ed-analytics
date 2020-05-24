import React, { Component, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

export default class NavBar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Fragment>
            <Button>Home</Button>
          </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
}
