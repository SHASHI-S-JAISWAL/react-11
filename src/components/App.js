import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect, Switch  } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import TodoApp from "./TodoApp";
import Dashboard from "./Dashboard";

class App extends Component {
	render() {
		return (
				<Router >
					<div className="App">
					<Switch>
						<Route exact path="/register" component={Registration} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/TodoApp" component={TodoApp} />
						<Route exact path="/Dashboard" component={Dashboard} />
						<Redirect from="/" to="login" />
					</Switch>
					</div>
				</Router>
		);
	}
}
export default App;