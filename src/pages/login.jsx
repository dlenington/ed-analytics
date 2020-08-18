import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
    
const useStyles = makeStyles((theme) => ({
 field: {
   margin: '0px 0px 20px'
 }
}));


const Login = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <Grid container>
      <Grid item sm>
    
      </Grid>
      <Grid item sm>
    <Typography>
      Login Section
    </Typography>
      </Grid>
      <Grid item sm>
    
      </Grid>
    </Grid>

    <Grid container>
      <Grid item sm>
    
      </Grid>
      <Grid item sm>
    <Typography>
      <TextField className={classes.field} label="username"/> <br/>
      <TextField className={classes.field} label="password"/>
    </Typography>
    <Button variant="contained">Login</Button>
      </Grid>
      <Grid item sm>
    
      </Grid>
    </Grid>
    </Fragment>


    );
};

export default Login;
