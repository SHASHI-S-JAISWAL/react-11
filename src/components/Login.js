import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Redirect, Switch,Link,useHistory  } from "react-router-dom";
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link1 from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginService from '../services/LoginService';
//import { RootRef } from '@material-ui/core';
import Dashboard from './Dashboard';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link1 color="inherit" href="https://material-ui.com/">
        Shashi Sekhar jaiswal
      </Link1>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function  navdash () {
  
    
  
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const logintry = async (e) => {
//   alert('hi');
//   alert(email);
//   const data = {
//     email: this.state.user_name,
//     password: this.state.password,
//   };
//   console.log(this.state.user_name);
//   const loginResult = await LoginService(data);
//   console.log(loginResult);
//   alert(loginResult);
//   if (loginResult !== 200) {
//     this.setState({
//       error: true,
//       loginSuccess: false,
//     });
//   } else
//     this.setState({
//       loginSuccess: true,
//       error: false,
//     });
// }

export default function SignInSide() {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [auth,setAuth ] = useState(''); 
  const [loading, setLoading] = React.useState(false);
  const [nav,setNav] = React.useState(false);
  
  const classes = useStyles();
  const history = useHistory();

  const logintry = async (e) => {
    setLoading(true);
    const data = {
      email: email,
      password: password
    };
    const loginResult = await LoginService(data);
    console.log(loginResult.data);
    setLoading(false);
    if (loginResult.status === 200) {
      if ( loginResult.data === 'Invalid Password' || loginResult.data ==='Email Doesnt exists'){
        alert('Username or Password Invalid');
      }
      else{
        alert('logged in ..');
        setNav(true);
        //setAuth('Success') ;
      }
    }
    else if (loginResult.status === 400) {
        alert('Username or Password Invalid');
      }
    else{
      alert('Username or Password Invalid');
      setEmail('');
      setPassword('');
    }
  };
  if(nav === true){
    
   history.push("/Dashboard");
    // const { history } = this.props;
    //  history.push("/Dashboard")
    // // return(
       //<Redirect  to="/Dashboard" />
     //)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/></svg>								
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange = { (event) => setEmail(event.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange = { (event) => {setPassword(event.target.value)}}
              autoComplete="current-password"
            />
            <Link1 to="/Dashboard" >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={logintry}
            >
              Sign In
            </Button>
            </Link1>
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
              <Link to="/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <div className={classes.placeholder}>
              <Fade
                in={loading}
                style={{
                  transitionDelay: loading ? '800ms' : '0ms',
                }}
                unmountOnExit
              >
                <CircularProgress />
              </Fade>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
            {/* {(auth==='Success')?<Router>
                <Switch>
                <Route exact path="/Dashboard" component={Dashboard} />
                <Redirect  to="/Dashboard" />
                </Switch>
              </Router>:<p></p>} */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
