//...
import NavbarComponent from "../components/global/Navbar";
import PrivateRoute from "../components/global/PrivateRoute";
//...
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
                    <Route exactpath="/about" component = {About}/>
                    <PrivateRoute roles = {[1,2]} exactpath = "/book/list" component = {BookListPage}/>
                    <PrivateRoute roles = {[1]} exactpath = "/book/details/:id" component = {BookDetailsPage}/> 
                    <Route path = "*" component = {Home}/>
                </Switch>
            </Router>
        );
    }
}