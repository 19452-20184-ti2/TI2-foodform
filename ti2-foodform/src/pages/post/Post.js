import React from "react";
import services from"../../services";

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            user:""
        }
    }

    render(){
        return(
        <div>Post {this.props.match.params.id} Page</div>
        );
    }
}