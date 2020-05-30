import React from "react";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function School() {
  return (
    <Card>
      <CardContent card>
        <Typography variant="h5">School Name</Typography>
        <Grid container xs={8}>
          <Grid item sm />
          <Grid item sm>
            <Typography>Student Survey</Typography>
            <Typography>5.5</Typography>
          </Grid>
          <Grid item sm>
            <Typography>Parent Survey</Typography>
            <Typography>8.2</Typography>
          </Grid>
          <Grid item sm>
            <Typography>Graduation Rate</Typography>
            <Typography>69%</Typography>
          </Grid>
          <Grid item sm />
        </Grid>
        <Button statsButton>View all statistics</Button>
      </CardContent>
    </Card>
  );
}
