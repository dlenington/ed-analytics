import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import School from "../components/School";
import { List } from "@material-ui/core";

function Home() {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    async function getSchools() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setSchools(result.data);
    }

    getSchools();
  }, [schools]);

  //Use react window to display the schools array
  //List component encapsulating this logic
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} xs={12}>
        <List array={schools}/>
      </Grid>
    </Grid>
  );
}

export default Home;
