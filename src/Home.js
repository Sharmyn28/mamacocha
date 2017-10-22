import React, { Component } from 'react';
import './home.css';
import { Button } from 'react-bootstrap';


/*class Home extends Component{
	render(){
		return(
			<Grid fluid>
				<Row>
					<Col lg={3} md={3}>

					</Col>
					<Col>
					</Col>
				</Row>
			</Grid>
		)
	}
}*/

class NavWeb extends Component {
	render() {
		return (
			<nav className='web-nav'>
				<a><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circle-icons-location.svg/2000px-Circle-icons-location.svg.png' /></a>
				<ul className='menu'>
					<li><a>Home</a></li>
					<li><a>Discover us</a></li>
					<li><a>Where to stay</a></li>
					<li><a>Residents</a></li>
					<li>
						<a>How to come</a>
						<ul className='link-subs'>
							<li><a>By car</a></li>
							<li><a>By bus</a></li>
						</ul>
					</li>
					<li><a>News</a></li>
				</ul>
			</nav>
		)
	}
}
class Tittle extends Component {
	render() {
		return (
			<div className="text-center">
				<p className="titlePag">MAMACOCHA<br/>
				Un paraíso por descubrir
				</p>
			</div>
		);
	}
}
class NavMobile extends Component {
	render() {
		return (
			<nav className='mobile-nav'>
				<a><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circle-icons-location.svg/2000px-Circle-icons-location.svg.png' /></a>
				<ul className='menu'>
					<li><a>Home</a></li>
					<li><a>Discover us</a></li>
					<li><a>Where to stay</a></li>
					<li><a>Residents</a></li>
					<li>
						<a>How to come</a>
						<ul className='link-subs'>
							<li><a>By car</a></li>
							<li><a>By bus</a></li>
						</ul>
					</li>
					<li><a>News</a></li>
				</ul>
			</nav>
		)
	}
}

class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<NavWeb />
					</div>
					<div className="col-md-9">
						<Tittle />
					</div>
				</div>
			</div>
		)
	}
}
export default Home;