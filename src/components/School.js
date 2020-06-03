import React from "react";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    position: "absolute",
    right: "80px",
    marginBottom: "20px",
  },
  card: {
    paddingBottom: "10px",
  },
});

export default function School() {
  const classes = useStyles();
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
      </CardContent>
      <CardActions>
        <Button className={classes.button}>View all statistics</Button>
      </CardActions>
    </Card>
  );
}
