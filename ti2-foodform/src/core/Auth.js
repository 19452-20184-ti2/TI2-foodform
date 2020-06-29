import React from "react";
import AuthContext from "../configs/authContext";

export default class AuthComponent extends React.Component{
    
    constructor(props){
        super(props);
        const user = sessionStorage.getItem("user");
        this.setState = {
            user: user ? JSON.parse(user) : undefined,
            login: this.login,
            logout: this.logout
        };
    }

    logout = (user) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setState({ user: user})
    };

    logou = () => {
        sessionStorage.removeItem("user");
        this.setState({ user: undefined});
    };

    render(){
    return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>;
    }
}