import React, { useState } from "react";
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
    <Grid>
      <Grid item sm />
      <Grid item sm>
        <Card>
          <CardContent>
            <Grid>
              <Grid item sm>
                <Typography variant="h2">{name}</Typography>
              </Grid>
              <Grid item sm>
                {/* graph key */}
              <Grid/>
              <Grid item sm />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm />
    </Grid>

    <Graph/>
  );
}
