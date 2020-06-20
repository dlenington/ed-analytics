import React, { useState, Fragment } from "react";
import Graph from "../components/Graph";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: "80px auto 0 auto",
  },
  card: {
    margin: "40px auto 0",
  },
});

function Detail(props) {
  // const {
  //   school: { name },
  // } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm />
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">School Name</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}

export default Detail;
