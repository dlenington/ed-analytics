import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
    

const Login = () => {
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
      <TextField label="username"/>
      <TextField label="password"/>
    </Typography>
      </Grid>
      <Grid item sm>
    
      </Grid>
    </Grid>
    </Fragment>


    );
};

export default Login;
