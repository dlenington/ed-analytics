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
    paddingBottom: "40px",
    font: "Medium 16px/21px Roboto",
    fontSize: "16px",
    letterSpacing: "0px",
    color: "#0066E1",
    opacity: "1",
  },
  cardActions: {
    padding: "20px",
  },
  cardTitle: {
    paddingTop: "16px",
  },
  numbers: {
    font: "Medium 48px Roboto",
    fontSize: "48px",
    letterSpacing: "0px",
    color: "#707070",
    opacity: 1,
  },
});

export default function School() {
  const classes = useStyles();
  return (
    <Card>
      <CardContent card>
        <Typography variant="h5" className={classes.cardTitle}>
          School Name
        </Typography>
        <Grid container xs={8}>
          <Grid item sm />
          <Grid item sm>
            <Typography>Student Survey</Typography>
            <Typography className={classes.numbers}>5.5</Typography>
          </Grid>
          <Grid item sm>
            <Typography>Parent Survey</Typography>
            <Typography className={classes.numbers}>8.2</Typography>
          </Grid>
          <Grid item sm>
            <Typography>Graduation Rate</Typography>
            <Typography className={classes.numbers}>69%</Typography>
          </Grid>
          <Grid item sm />
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button}>View all statistics</Button>
      </CardActions>
    </Card>
  );
}
