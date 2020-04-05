import React from 'react';
import './Home.css';

export default class HomePage extends React.Component{
  render(){
    return (
      <div className="homePageContainer">
        <div className="loginContainer">
          <center><h1>Log In</h1></center>
          <h3>Username</h3>
          <input type="text" id="userLogIn"/>
          <h3>Password</h3>
          <input type="text" id="passLogIn"/>
          <br/>
          <button onClick={() => this.props.logIn()}>Login</button>
        </div>
      </div>
    );
  }
}
