import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import School from "../components/School";

export default class Home extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          <School />
        </Grid>
      </Grid>
    );
  }
}
