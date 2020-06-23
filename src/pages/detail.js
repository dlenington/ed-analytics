import React, { useState, Fragment, useEffect } from "react";
import { Chart } from "react-google-charts";
import Graph from "../components/Graph";
import axios from "axios";

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
  const [stats, setStats] = useState([]);
  const { name } = props.location.state;
  const classes = useStyles();

  useEffect(() => {
    async function getStats() {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setStats(result.data);
    }

    getStats();
  });

  return (
    <Grid container>
      <Grid item sm />
      <Grid item>
        <Typography className={classes.title} variant="h4">
          {name}
        </Typography>
        {stats.map((stat) => {
          <Card className={classes.card}>
            <CardContent>
              <Chart
                width={"500px"}
                height={"300px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Year", "Student", "Parent", "Average"],
                  ["2014", 1000, 400, 600],
                ]}
                options={{
                  // Material design options
                  chart: {
                    title: stat.title,
                    subtitle: "",
                  },
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
              />
            </CardContent>
          </Card>;
        })}
      </Grid>
      <Grid item sm />
    </Grid>
  );
}

export default Detail;
