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
            <div className="eachComment">
                <div className="commentTop">
                    <h3>{this.state.user.username}</h3>
                    <a>{this.props.date}</a>   
                </div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}