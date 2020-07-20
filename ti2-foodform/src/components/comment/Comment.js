import React from 'react';
import './Comment.css';
import services from '../../services'

export default class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: [],
            error: undefined
        }
    }

    componentDidMount = () => 
        services.user.getUser(this.props.userID)
            .then((value) => this.setState({user: value}))
            .catch((err) => this.setState({ error: err }));

    render(){
        return(
            <div>
                <div>
                    <h2>{this.state.user.username}</h2>
                    <p>{this.props.date}</p>   
                </div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}