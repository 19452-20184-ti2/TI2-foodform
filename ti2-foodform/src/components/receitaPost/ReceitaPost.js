import React from 'react';
import "./ReceitaPost.css";
import { Link } from 'react-router-dom';
import "./Style.css";

export default class ReceitaPost extends React.Component { 
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="receitaPost">
                <Link to={`post/${this.props.id}`}><img alt="post img" src={this.props.imgURL} className="receitaIMG"/></Link>
                <h3>{this.props.title}</h3>
                <p>{this.props.ingredients} Ingredient(s)</p>
                </div>
            </div>
        );
    }
}