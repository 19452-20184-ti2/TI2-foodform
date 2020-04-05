import React from 'react';
import './Upload.css';

export default class Upload extends React.Component{
    render(){
        return(
            <div className="uploadPageContainer">
                <div className="uploadContainer">
                    <center><h1>Upload your masterpiece!</h1></center>
                    <h3>Title</h3>
                    <input type="text" id="titleUp"/>
                    <h3>Description</h3>
                    <input type="text" id="discUp"/>
                    <h3>Image URL</h3>
                    <input type="text" id="urlUp"/>
                    <br/>
                    <button type="button">Submit</button>
                </div>
        </div>
        );
    }
}