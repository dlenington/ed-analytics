import React, { Component, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Typography } from "@material-ui/core";
import Logo from "../icons/Logo";
import MyMenu from "./MyMenu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
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
    paddingTop: "20px",
    paddingBottom: "20px",
    textDecoration: "none",
    // right: "100px",
  },
  logo: { flexGrow: 3, color: "#EEEEEE" },
  navLink: { textDecoration: "none" },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.nav}>
        {/* <MyMenu /> */}
        <Link to="/">
          <Button className={classes.logo}>
            <Logo />
          </Button>
        </Link>
        <div className={classes.grow}></div>
        <Link to="/" className={classes.navLink}>
          <Button className={classes.navText}>Home</Button>
        </Link>
        <Link to="/profile" className={classes.navLink}>
          <Button className={classes.navText}>Profile</Button>
        </Link>
        <Link to="/login" className={classes.navLink}>
          <Button className={classes.navText}>Login</Button>
        </Link>
        <Link to="/signup" className={classes.navLink}>
          <Button className={classes.navText}>Signup</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
