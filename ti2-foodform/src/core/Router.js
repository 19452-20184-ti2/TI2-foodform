import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from "../components/global/Navbar";
import PrivateRoute from "../components/global/PrivateRoute";
//====Pages====
import AboutPage from "../pages/about/About";
import HomePage from "../pages/home/Home";
import FeedPage from "../pages/feed/Feed";
import PostPage from "../pages/post/Post";
import UploadPage from "../pages/upload/Upload"
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

export default class RouterComponent extends React.Component{
    render(){
        return(
            <Router>
                <NavbarComponent/>
                <Switch>
                    <Route exact path="/register" component = {RegisterPage}/>
                    <Route exactpath="/login" component = {LoginPage}/>
                    <Route exactpath="/about" component = {AboutPage}/>
                    <PrivateRoute roles = {[1,2]} exactpath = "/posts" component = {FeedPage}/>
                    <PrivateRoute roles = {[1,2]} exactpath = "/posts/:id" component = {PostPage}/> 
                    <Route path = "*" component = {HomePage}/>
                </Switch>
            </Router>
        );
    }
}