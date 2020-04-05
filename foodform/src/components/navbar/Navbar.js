import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//============== PAGES =========================
import Home from '../../pages/home/Home.js';
import About from '../../pages/about/About.js';
import Feed from '../../pages/feed/Feed.js';
import Upload from '../../pages/upload/Upload.js';
//==============================================

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedOut: true,
        }
    }
    render(){
        if (this.state.loggedOut){
            return(
            <Router>
                <div className="navbarCont">
                    <div className="logo">
                        <h2>FoodForm</h2>
                    </div>
                </div>
                <Home logIn={this.logIn}/>
            </Router>
            )
        }else{
            return(
                <Router>
                    <div className="navbarCont">
                        <div className="logo">
                            <h2>FoodForm</h2>
                        </div>
                        <div className="navbar">
                            <Link to="/feed">Feed</Link>
                            <Link to="/upload">Upload</Link>
                            <Link to="/about">About</Link>
                            <p onClick={ () => this.logOut() }>Logout</p>
                        </div>
                    </div>
                    
                    <Switch>
                        <Route path="/logIn">
                            <Home />
                        </Route>
                        <Route path="/feed">
                            <Feed filter={this.state.searchFilter}/>
                        </Route>
                        <Route path="/upload">
                            <Upload/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </Router>
            );
        }
    }

    logIn = () => {
        this.setState({loggedOut: false});
    }
    logOut = () =>{
        this.setState({loggedOut: true});
    }
}


