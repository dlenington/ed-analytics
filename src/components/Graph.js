import React from "react";

export default function Graph(props) {
  const { title } = props.stat;

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
