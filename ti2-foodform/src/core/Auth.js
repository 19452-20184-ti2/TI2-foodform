import React from "react";
import AuthContext from "../configs/authContext";

export default class AuthComponent extends React.Component{
    
    constructor(props){
        super(props);
        const user = sessionStorage.getItem("user");
        this.setState = {
            user: user ? JSON.parse(user) : undefined,
            login: this.login,
            logout: this.logout,
        };
    }

    /**
     * Faz o login e o objecto user restornado do servidor é guardado como state do componente AuthComponent.
     * @param {*} user 
     */
    login = (user) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setState({ user: user});
    };

    /**
     * Faz o logout e o objecto user passa a undifined no state do componenete Auth Component
     */
    logout = () => {
        sessionStorage.removeItem("user");
        this.setState({ user: undefined});
    };

    render(){
    return (
        <AuthContext.Provider value={this.state}>
            {this.props.children}
        </AuthContext.Provider>)
        ;
    }
}