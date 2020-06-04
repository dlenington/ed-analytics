import React, { Component, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  nav: {
    background: "#57C1B2 0% 0% no-repeat padding-box",
    boxShadow: "0px 1px 3px #00000066",
    borderRadius: "2px",
    opacity: 1,
  },
  navText: {
    font: "Medium 24px/32px Roboto",
    fontSize: "24px",
    letterSpacing: "0px",
    color: "#EEEEEE",
    opacity: 1,
    justifyContent: "right",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.nav}>
        <Fragment>
          <Button className={classes.navText}>Home</Button>
        </Fragment>
      </Toolbar>
    </AppBar>
  );
}
