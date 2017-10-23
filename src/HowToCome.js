import React, { Component } from 'react';
import './HowToCome.css';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    NavLink
} from 'react-router-dom'

class NavWeb extends Component {
    render() {
        return (
            <nav className='web-nav'>
                <a><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circle-icons-location.svg/2000px-Circle-icons-location.svg.png' /></a>
                <ul className='menu'>
                    <li><NavLink to="/home"><a>Home</a></NavLink></li>
                    <li><a>Discover us</a></li>
                    <li><a>Where to stay</a></li>
                    <li><a>Residents</a></li>
                    <li>
                        <NavLink to="/howtocome"><a>How to come</a></NavLink>
                    </li>
                    <li><a>News</a></li>
                </ul>
            </nav>
        )
    }
}

class Ayo extends Component {
    render() {
        const Bus = () => {
            return (
                <div className="infoContent">
                    <h4>TERMINAL</h4>
                    <p>Puedes tomar el bus en el terrapuerto de Arequipa, tienes dos opciones:</p>
                    <ul>
                        <li>
                            <div><h4>Empresa Reyna</h4>
                                <p>Esta empresa sale todos los días a las 4 de la tarde, estas llegando al pueblo de ayo
                                    a las 3 de la mañana</p>
                            </div>
                        </li>
                        <li>
                            <div><h4>Empresa Flores</h4>
                                <p>Esta empresa sale todos los días a las 4 de la tarde, sin embargo solo llegas hasta Andagua,
                                    despues tendrías que tomar una mobilidad para ayo donde llegarias a las 3 de la mañana</p>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        }
        const Car = () => {
            return (
                <div>
                    INFOCar
              </div>
            );
        }
        return (
            <div classname="main-content courses">
                <nav className="navbar navbar-inverse secondNav">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h2>CAMINOS</h2>
                        </div>
                        <ul className="nav navbar-nav navbar-right" id="navbarActual">
                            <li>  <NavLink exact to="/ayo/bus"><img className="sizeIMG" src="images/bus-icon.gif" /></NavLink> </li>
                            <li>  <NavLink to="/ayo/car"><img className="sizeIMG" src="images/car-1.png" /> </NavLink> </li>
                        </ul>
                    </div>
                </nav>
                <div classname="container-fluid">
                    <div classname="row">
                        <div classname="col-md-12 col-sm-12 col-xs-12">
                            <Switch>
                                <Route exact path="/ayo"
                                    render={() => <Redirect to="/ayo/bus" />} />

                                <Route path="/ayo/bus" component={Bus} />
                                <Route path="/ayo/car" component={Car} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Mamacocha extends Component {
    render() {
        const CarLagoon = () => {
            return (
                <div>
                    INFOCarLagoon
              </div>
            );
        }
        const Trecking = () => {
            return (
                <div>
                    INFOTrecking
              </div>
            );
        }
        return (
            <div classname="main-content courses">
                <nav className="navbar navbar-inverse secondNav">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h2>CAMINOS</h2>
                        </div>
                        <ul className="nav navbar-nav navbar-right" id="navbarActual">
                            <li>  <NavLink exact to="/mamacocha/car"><img className="sizeIMG" src="images/car-1.png" /></NavLink> </li>
                            <li>  <NavLink to="/mamacocha/trecking"><img className="sizeIMG" src="images/activity_type_TK.png" /></NavLink> </li>
                        </ul>
                    </div>
                </nav>
                <div classname="container-fluid">
                    <div classname="row">
                        <div classname="col-md-12 col-sm-12 col-xs-12">
                            <Switch>
                                <Route exact path="/ayo"
                                    render={() => <Redirect to="/ayo/bus" />} />

                                <Route path="/ayo/bus" component={CarLagoon} />
                                <Route path="/ayo/car" component={Trecking} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class HowToCome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <NavWeb />
                    </div>
                    <div className="col-md-9">
                        <BrowserRouter>
                            <div id="info">
                                <header>{' '}
                                    <nav className="navbar navbar-inverse">
                                        <div className="container-fluid">
                                            <div className="navbar-header">
                                                <a className="navbar-brand" href="#">ComoLLegar</a>
                                            </div>
                                            <ul className="nav navbar-nav">
                                                <li><NavLink to="/ayo">Ayo</NavLink></li>
                                                <li><NavLink to="/mamacocha">Mamacocha</NavLink></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </header>
                                <div id="container-info" className="container-fluid">
                                    <Switch>
                                        <Route exact path="/ayo" component={Ayo} />
                                        <Route path="/mamacocha" component={Mamacocha} />
                                        <Route component={Ayo} />
                                    </Switch>
                                </div>


                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }
}
export default HowToCome;