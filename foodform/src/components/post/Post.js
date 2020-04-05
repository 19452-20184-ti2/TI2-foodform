import React from 'react';
import './Post.css';

class Post extends React.Component{
    render(){
        return(
            <div className="postContainer">
                <img src={this.props.img} className="postImg" alt="post img" onClick={ () => this.props.show(this.props.id)}/>
                <h3>{this.props.title}</h3>
                <div className="postDetails">
                    <p className="postLikes">{this.props.nLikes} Like(s)</p>
                    <p className="postComments">{this.props.nIng} Ingredient(s)</p>
                </div>
            </div>
        );
    }
}

export default Post;