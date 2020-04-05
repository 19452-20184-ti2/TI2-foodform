import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";

export default class RouterComponent extends React.Component{
    render(){
        return (

            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul>
                                <li>
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path ="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch> 
                </div>
            </Router>  
                
        );
    }
}