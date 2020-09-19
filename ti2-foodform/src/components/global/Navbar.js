import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import "./Navbar.css"; 

export default class NavbarComponent extends React.Component{ 
    static contextType = AuthContext;
    render(){
        const {user, logout} = this.context;
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <Nav.Link as = {NavLink} exact to = "/">FoodForm</Nav.Link>
                            {user && <Nav.Link as = {NavLink} to = "/upload" >Upload</Nav.Link>}
                            <Nav.Link as = {NavLink} to = "/about">About</Nav.Link>                          
                        </Nav>
                        
                        <Nav>
                            {user ? 
                                <NavDropdown title = {user.username}  alignRight>
                                    <Nav.Link id="navdropdown" as = {NavLink} to = {`/user/${user._id}`} >User Page</Nav.Link>
                                    <NavDropdown.Item onClick = { () => logout() }>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Link as = {NavLink} to="/login">Login</Nav.Link>
                                
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}