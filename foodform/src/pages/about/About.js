import React from 'react';
import Trem from '../../assets/trem.jpg';
import Tom from '../../assets/tom.jpg';
import './About.css';
import Student from '../../components/student/Student.js';

export default class About extends React.Component{
    render(){
        console.log(Tom);
        return (
        <div className="aboutContainer">
            <p className="aboutDiscription">Este trabalho foi realizado para a U.C. de Tecnologias da Internet II pelos alunos:</p>
            <div className="alunosContainer">
                <Student src={Tom} name="Tomás Colaço" number="19452"/>
                <Student src={Trem} name="Tiago Correia" number="20184"/>
            </div>
        </div>
        );
    }
}