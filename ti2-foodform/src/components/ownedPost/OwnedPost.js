import React from 'react';
import "./OwnedPost.css";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default class OwnedPost extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="postContainer">
                <div className="infoContainer">
                    <Link to={`post/${this.props.id}`}><img alt="post img" src={this.props.imgURL} className="receitaIMG"/></Link>
                    <p>{this.props.title}</p>
                </div>
                <div className="optionsContainer">
                    <Link to={`post/${this.props.id}`}><Button variant="secondary">View</Button></Link>
                    <Button variant="secondary" onClick>Edit</Button>
                    <Button variant="danger" onClick="">Delete</Button>
                </div>
            </div>
        );
    }
}