import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  title: {
    margin: "auto",
  },
});
export default function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h1>Profile</h1>
      <Grid>
        <Grid item sm/>
    <Grid item sm>
Profile picuture

    </Grid>
    <Grid item sm/>
      
      </Grid>
    </div>
  );
}
