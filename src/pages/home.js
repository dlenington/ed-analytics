import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
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

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} xs={12}>
        <List array={schools}/>
      </Grid>
    </Grid>
  );
}

export default Home;
