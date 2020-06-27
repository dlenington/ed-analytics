import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import School from "../components/School";

function Home() {
  const [schools, setSchools] = useState([]);

  //call cleanup method to set isMounted to false;
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
        {schools.map((school) => (
          <School key={school.id} school={school} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
