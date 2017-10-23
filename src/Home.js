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
				<a><img className='logo' src='http://mammothmedia.tv/admin/wp-content/themes/mame/assets/img/mammoth-logo.png' /></a>
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

class NavMobile extends Component {
	render() {
		return (
			<nav className='mobile-nav'>
				<a><img className='logo' src='http://mammothmedia.tv/admin/wp-content/themes/mame/assets/img/mammoth-logo.png' /></a>
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
			<div>
				<NavWeb />
			</div>
		)
	}
}
export default Home;