import React from 'react';
import './DetailedPost.css';

//Depois de selecionado o post é demonstrado com este componente no feed
export default class DetailedPost extends React.Component{
    render(){
        return(
        <div className="detailedContainer">
            <div className="detailLeftContainer">
                <img src={this.props.img} alt='imagem da receita' className="detailImg"/>
                <h5>{this.props.nLikes} Like(s)</h5>
                <h5>{this.props.comments.length} Comment(s)</h5>
                {this.allComments()}
            </div>
            <div className="detailRightContainer">
                <h2>{this.props.title}</h2>
                <p>{this.props.disc}</p>
                <h3>Ingredients:</h3>
                <ul>
                    {this.allIng()}
                </ul>
                <button onClick={() => this.props.back()}>Back</button>
            </div>
        </div>
        );
    }
    //todos os ingredientes
    allIng = () => {
        const ingredients = this.props.ingredients.map(i => (
            <li>{i}</li>
        ) );
        return ingredients;
    }

    allComments = () => {
        const ingredients = this.props.comments.map(i => (
            <p>{i}</p>
        ) );
        return ingredients;
    }
}