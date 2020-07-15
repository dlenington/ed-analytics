import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  title: {
    margin: "auto",
    width: '100px'
  },
});
export default function Profile() {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.title}>
      <h1>Profile</h1>
      </div>
      <Grid container sm>
        <Grid item sm/>
    <Grid item sm>
Profile picture
    </Grid>
    <Grid item sm>
    Profile Details

    </Grid>
      </Grid>
    </div>
  
  );
}
