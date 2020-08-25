import React from "react";
import List from "../components/List";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import themeFile from "../util/themeFile";
import blue from '@material-ui/core/colors/blue';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

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
      <Typography variant="h2">Profile</Typography>
      </div>
      <Grid container sm>
    <Grid item sm>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h2">
        Profile IMG
        </Typography>
        <Typography text="secondary">      
          Dan
        </Typography>
        <Typography>
          24   
        </Typography>
        <Typography>
          This is my bio
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item sm>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3">
          Activity
        </Typography>
        <List/>
      </CardContent>
    </Card>
    </Grid>
      </Grid>
    </div>
  
  );
}
