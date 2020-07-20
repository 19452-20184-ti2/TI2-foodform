import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from "../components/global/Navbar";
import PrivateRoute from "../components/global/PrivateRoute";
//====Pages====
import AboutPage from "../pages/about/About";
import HomePage from "../pages/home/Home";
import PostPage from "../pages/post/Post";
import UploadPage from "../pages/upload/Upload"
import UserPage from "../pages/user/User"
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

export default class RouterComponent extends React.Component{
    render(){
        return(
            <Router>
                <NavbarComponent/>
                <Switch>
                    <Route exact path="/register" component = {RegisterPage}/>
                    <Route exact path="/login" component = {LoginPage}/>
                    <Route exact path="/about" component = {AboutPage}/>
                    <Route exact path = "/post/:id" component = {PostPage}/>
                    <PrivateRoute roles = {[1,2]} exact path = "/upload" component = {UploadPage}/>
                    <PrivateRoute roles = {[1,2]} exact path = "/user/:uid" component = {UserPage}/>
                    <Route path = "*" component = {HomePage}/>
                </Switch>
            </Router>
        );
    }
}