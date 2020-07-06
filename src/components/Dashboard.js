import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import { shadows } from '@material-ui/system';
import './Dashboard.css';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import { HashRouter as Router, Route, Redirect, Switch ,Link as Link1 } from "react-router-dom";
import TodoApp from "./TodoApp" ;
import Link from '@material-ui/core/Link';

//importing services
import WeatherService from '../services/WeatherService';
import Corona_India from '../services/Corona_India';
import { Button } from '@material-ui/core';
import location from '../services/location';

export default class Todolist extends Component{
    
    constructor(props) {
        super(props);
        this.state ={
            user :{

            },
            weather:{
                temp : '',
                desc:''
            },
            corona :'',
            address :'',
            location:'',
            todo :'no'
        }
    } 
    classes = makeStyles((theme) => ({
        root: {
          height: '100vh',
        },
        image: {
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBUwH9_VfZJklmEZFtUPZLWo63t6RgXL0ynA&usqp=CAU)',
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
        cardroot: {
            maxWidth: 345,
          },
        media: {
            height: 140,
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
    
    //getuser 
    get_location = async(address)=>{
        const loc = await location(address);
        this.setState({
            location : loc
        });
        this.fetch_weather(loc)
    }

    fetch_weather = async (loc) => {
        const w_data = await WeatherService(loc);
        console.log(w_data);
        this.setState({
            weather :{
                temp:Math.ceil(( w_data.currently.temperature -32 ) *5/9),
                desc : w_data.currently.summary
            }
        });
    }

    fetch_cases = async ()=>{
        const cases = await Corona_India ();
        console.log(cases);
        this.setState({
            corona :cases
        });
    }

    direct_todo =() =>{
        this.setState({
            todo :"yes"
        });
    }


    componentDidMount(){
        this.fetch_cases();
    }

    render(){
        return(
            <div id="rt" className={this.classes.root} style={{height: '100%', position: 'absolute', width: '100%', overflow: 'hidden'}} spacing={3}>
                < Grid container spacing={3}  >
                    <Grid item xs={6}>
                         <h1 style = {{  marginLeft : 100 , marginTop : 100,color: "white",textShadow: "0 3px 0 black" }}>
                             Welcome to the Dashboard 
                        </h1>
                        {/* <Button
                            style = {{ marginTop:10, marginLeft : 100 }}
                            width = "70%"
                            variant="contained"
                            color="primary"
                            onClick = {this.direct_todo}
                            >
                            Make To do list =>
                            </Button> */}
                        <Link1 color="inherit" to="/TodoApp" style = {{ marginTop:10, marginLeft : 100 }} >
                        Make To do list =>
                        </Link1>
                    </Grid>
                    <Grid item xs={6} >
                        {/* <Paper className={this.classes.paper}>
                            <Card className={this.classes.cardroot}>
                                <CardActionArea>
                                    {/* <CardMedia
                                    className={this.classes.media}
                                    image='url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiCULe-0nXJqMNfd0VYFGosPTCNqx55LCT3A&usqp=CAU)'
                                    title="Contemplative Reptile"
                                    /> */}
                                    {/*<CardMedia 
                                        component="img" 
                                        alt="Contemplative Reptile"
                                        height="200"
                                        image = './logo512.png'
                                        title="Contemplative Reptile"
                                     /> 
                                     <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link href='https://www.worldometers.info/coronavirus/'>
                                    Learn More
                                    </Link>
                                </CardActions>
                            </Card>
                        </Paper> */}
                        <div style={{  marginTop :100 }}>
                            <h2 style ={{color: "white",textShadow: "0 3px 0 black"}}>Covid -19 India update</h2>
                            
                            <p style={{textAlign :"center",color: "white",textShadow: "0 3px 0 black"}}>Number of total cases in India : {this.state.corona}
                            <br></br>
                            <Link href='https://www.worldometers.info/coronavirus/' style ={{color: "white",textShadow: "0 3px 0 black"}}>
                                 Click here to Get Details
                             </Link>
                             </p>
                         </div>
                     </Grid>
                    <Grid item xs={12}>
                        <div id ="test1">
                            <h2 style ={{color: "white",textShadow: "0 3px 0 black"}}> Enter location for weather forecast and temperature </h2>
                            <TextField label= "eg.,Delhi" onChange = {(event) =>this.setState({address : event.target.value})}></TextField>
                            <Button
                            style = {{  marginTop:10 ,marginLeft : 100 }}
                            width = "50%"
                            variant="contained"
                            color="primary"
                            className={this.classes.submit}
                            onClick = {()=>{ this.get_location(this.state.address)}}
                            >
                            Send Request
                            </Button>
                            {this.state.weather.temp !==''?
                            <div style ={{ marginTop : 20}}>
                            <h3 style ={{color: "white",textShadow: "0 3px 0 black"}}>Average temperature : {this.state.weather.temp}&deg; C</h3>
                            <h3 style ={{color: "white",textShadow: "0 3px 0 black"}} >Forecast for the day : {this.state.weather.desc}</h3>
                            </div>
                            : <div></div>}

                        </div>
                    </Grid>
                    {this.state.todo === 'yes' ?<Router>
                        <Switch>
                        <Route exact path="/TodoApp" component={TodoApp} />
                       <Redirect  to="/TodoApp" />
                       </Switch>
                       </Router>:<p></p>}
                 </Grid>
             </div>
        )
    }
}

