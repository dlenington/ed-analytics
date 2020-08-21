import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
 field: {
   margin: '0px 0px 20px'
 },
 button: {
   color: blue
 }
}));


const Login = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <Grid container justify="center">
      <Typography className={classes.title} variant="h3">Login</Typography>
    </Grid>

    <Grid container justify="center">
     <form noValidate>
       <div>
       <TextField className={classes.field} label="username"/>
       <TextField className={classes.field} label="password"/>
       </div>
     </form>
     
      

    </Grid>
    
    <Grid container justify="center">
    <Button variant="contained" className={classes.button}>Login</Button>
    </Grid>
    </Fragment>
    );
};

export default Login;
