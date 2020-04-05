import React from 'react'
import './SearchBar.css';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="searchbar">
                <input type="text" id="searchFilter" placeholder="Search"></input>
                <button onClick={() => this.props.search()}><span role='img'>🔎</span></button>
            </div>
        );
    }

}

