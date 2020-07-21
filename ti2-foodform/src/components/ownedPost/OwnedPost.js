import React from 'react';
import "./OwnedPost.css";
import { Button } from 'react-bootstrap';




export default class OwnedPost extends React.Component {
    constructor(props){
        super(props);
    }

    handleView = evt => {
        this.props.view(this.props.id);
    }
    handleEdit = evt => {
        this.props.edit(this.props.id);
    }
    handleDelete = evt => {
        const r = window.confirm("Are you sure you want to delete this recepie?")
        if( r === true){
            this.props.delete(this.props.id);
        }
    }

    render(){
        return(
            <div className="postContainer">
                <div className="infoContainer">
                    <img alt="post img" src={this.props.imgURL} className="receitaIMG"/>
                    <p>{this.props.title}</p>
                </div>
                <div className="optionsContainer">
                    <Button variant="secondary" onClick={(evt) => this.handleView(evt)}>View</Button>
                    <Button variant="secondary" onClick={(evt) => this.handleEdit(evt)}>Edit</Button>
                    <Button variant="danger" onClick={(evt) => this.handleDelete(evt)}>Delete</Button>
                </div>
            </div>
        );
    }
}