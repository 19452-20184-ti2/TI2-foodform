import React from "react";
import Tom from '../../assets/tom.jpg';
import Trem from '../../assets/trem.jpg';
import "./About.css"

export default class About extends React.Component{
    render(){
        return(
            <div className="evenbiggerContainer">
                <h3>Este projecto foi realizado no ambito da U.C. de Tecnologias da Internet II - Component de Cliente pelos alunos:</h3>
                <div className="biggerContainer">
                    <div className="alunoContainer">
                        <img src={Tom} className="alunoPhoto" />
                        <h3>Tomás Colaço</h3>
                        <p>nº 19452</p>
                    </div>
                    <div className="alunoContainer">
                        <img src={Trem} className="alunoPhoto"/>
                        <h3>Tiago Correia</h3>
                        <p>nº 20184</p>
                    </div>  
                </div>
                
            </div>
        );
    }
}