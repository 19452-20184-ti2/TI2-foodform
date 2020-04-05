import React from 'react';
import './Student.css';

export default class Student extends React.Component{
    render(){
        return(
            <div className="aluno">
                <img className="aboutImg" src={this.props.src} alt="imagem do aluno"/>
                <h2>{this.props.name}</h2>
                <h4>nº{this.props.number}</h4>
            </div>
        );
    }
}