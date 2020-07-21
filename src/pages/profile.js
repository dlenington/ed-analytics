import React from "react";


import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import themeFile from "../util/themeFile";
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  // ...themeFile,
  title: {
    margin: "auto",
    width: '100px'
  },
  card: {
    margin: '20px'
  },
  button: {
   color: blue
  }
}));
export default function Profile() {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.title}>
      <h1>Profile</h1>
      </div>
      <Grid container sm>
    <Grid item sm>
    <Card className={classes.card}>
      <CardContent>
        Profile Picture
      </CardContent>
      <CardActions>
        <Button variant="contained" color={classes.primary} >
          Edit
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item sm>
    <Card className={classes.card}>
      <CardContent>
        <Typography>
          Profile Details
        </Typography> 
        <Typography>      
          Name
        </Typography>
        <Typography>
          Age   
        </Typography>
        <Typography>
          Bio
        </Typography>
      </CardContent>
    </Card>

    </Grid>
      </Grid>
    </div>
  
  );
}