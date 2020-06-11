import React from "react";
import SchoolIcon from "../icons/SchoolIcon";
import BarChartIcon from "../icons/BarChartIcon";
import ArrowIcon from "../icons/ArrowIcon";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    position: "relative",
    overflow: "visible",
    padding: "40px 0px 40px 0px",
  },
  button: {
    position: "absolute",
    right: "80px",
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
  statsTitle: {
    position: "absolute",
    left: "200px",
  },
});

export default function School() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.cardTitle}>
          <SchoolIcon /> School Name
        </Typography>
        <Typography variant="h5" className={classes.statsTitle}>
          <BarChartIcon /> Statistics
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
        <Button className={classes.button}>
          View all statistics
          <ArrowIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
