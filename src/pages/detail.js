import React, { useState, Fragment } from "react";
import { Chart } from "react-google-charts";
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
    margin: "40px auto 0 auto",
  },
  card: {
    margin: "40px auto 0",
  },
});

//How to recieve props from homepage

//use context api to pass school object to graph components (further nested)
function Detail(props) {
  const { name } = props.location.state;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm />
      <Grid item>
        <Typography className={classes.title} variant="h4">
          {name}
        </Typography>
        <Card className={classes.card}>
          <CardContent>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses", "Profit"],
                ["2014", 1000, 400, 200],
                ["2015", 1170, 460, 250],
                ["2016", 660, 1120, 300],
                ["2017", 1030, 540, 350],
              ]}
              options={{
                // Material design options
                chart: {
                  title: "Company Performance",
                  subtitle: "Sales, Expenses, and Profit: 2014-2017",
                },
              }}
              // For tests
              rootProps={{ "data-testid": "2" }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}

export default Detail;
