import React from "react";
import { Chart } from "react-google-charts";

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    margin: "40px auto 0",
  },
});

export default function Graph(props) {
  const { title } = props.stat;
  const classes = useStyles();

  return (
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
              title,
              subtitle: "",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </CardContent>
    </Card>
  );
}
