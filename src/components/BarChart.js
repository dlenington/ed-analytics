import React from "react";
import { Chart } from "react-google-charts";

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    margin: "40px auto 0",
  },
});

function BarChart(props) {
  const { title } = props.stat;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Loading Statistics</div>}
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

export default BarChart;
