import React, { useState, useEffect } from "react";

import axios from "axios";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../components/BarChart";

const useStyles = makeStyles({
  title: {
    margin: "40px auto 0 auto",
  },
  card: {
    margin: "40px auto 0",
  },
});

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
        {stats.map((stat) => (
          <Chart key={stat.id} stat={stat} />
        ))}
      </Grid>
      <Grid item sm />
    </Grid>
  );
}

export default Detail;
