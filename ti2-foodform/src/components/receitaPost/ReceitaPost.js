import React from 'react';
import "./ReceitaPost.css";
import { Link } from 'react-router-dom';

export default class ReceitaPost extends React.Component { 
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="receitaPost">
                <Link to={`post/${this.props.id}`}><img alt="post img" src={this.props.imgURL}/></Link>
                <p>{this.props.title}</p>
                <p>{this.props.ingredients} Ingredient(s)</p>
            </div>
        );
    }
}