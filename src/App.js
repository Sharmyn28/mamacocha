import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import Home from './Home';
import HowToCome from './HowToCome'
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

const NotFound = (props) => {
	return (
		<div><h2> Error 404!!</h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route  path="/MAMACOCHA"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/howtocome" render={() => <HowToCome model={model} />}/>
				<Route component={Home}/>
				

			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
