import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import blue from '@material-ui/core/colors/blue';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
 field: {
   margin: '0px 0px 20px'
 },
}));


const Signup = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <Grid container justify="center">
      <Typography className={classes.title} variant="h3">Signup</Typography>
    </Grid>

    <Grid container justify="center">
     <form noValidate>
      <div>
       <TextField className={classes.field} label="Email"/>
       </div>
       <div>
       <TextField className={classes.field} label="Username"/>
       </div>
       <div>
       <TextField className={classes.field} label="Password"/>
       </div>
       <div>
       <TextField className={classes.field} label="Confirm Password"/>
       </div> 
     <Typography>Have an account?<Link>Login</Link></Typography>
     </form>
    </Grid>
    
    <Grid container justify="center">
    <Button variant="contained" color="primary" >Login</Button>
    </Grid>
    </Fragment>
    );
};

export default Signup;
