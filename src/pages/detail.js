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

export default function detail(props) {
  const {
    school: { name },
  } = props;
  return (
    <Fragment>
      <Typography variant="h2">{name}</Typography>
      <Button>Question Icon</Button>
      <Grid>
        <Grid item sm />
        <Grid item sm>
          <Card>
            <CardContent></CardContent>
          </Card>

          <Grid item sm />
        </Grid>
      </Grid>
      <Graph />
    </Fragment>
  );
}
