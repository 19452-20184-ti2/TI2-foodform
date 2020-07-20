import React from "react";
import services from"../../services";
import AuthContext from "../../configs/authContext";
import "./Post.css";
import {Button, Form} from "react-bootstrap";
import Comment from "../../components/comment/Comment.js";
import { set } from "mongoose";

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            liked: false,
            post:[],
            userID:"",
            commented: false,
            comment:"",
            comments:[],
            likes:[],
            error:undefined
        }
    }
    static contextType = AuthContext;

    componentDidMount = () => {
        services.post.getOnePost(this.props.match.params.id)
        .then((value) => this.setState({ post: value}))
        .catch((err) => this.setState({ error: err }));
        
        this.apiCallGetComments();

        this.apiCallGetLikes();

        const {user} = this.context;
        user && this.setState({userID: user._id});
    }

    componentDidUpdate = (prevProps, prevState) => {
        if((prevState.commented === false && this.state.commented === true) || prevState.comments.length !== this.state.comments.length) {
          this.apiCallGetComments(); 
          this.setState({commented: false});
        }
      }

    apiCallGetLikes = () =>{
            services.like.getPostLikes(this.props.match.params.id)
            .then((value) => this.setState({ likes: value }))
            .catch((err) => this.setState({ error: err }));
    }
        

    apiCallGetComments = () =>{
            services.comment.getPostComments(this.props.match.params.id)
            .then((value) => this.setState({ comments: value }))
            .catch((err) => this.setState({ error: err }));
    }
        

    listOfIngredients = () => {
        if(this.state.post.ingredients !== undefined){
            const ingredients = this.state.post.ingredients.trim().split(';');
            const listOfIngredients = ingredients.map( ingredient => {
                if(ingredient !=""){
                    return<li>{ingredient}</li>; 
                }
            });
            return listOfIngredients;
        }
    }

    renderComments = () => this.state.comments.map( c =>
        <Comment userID={c.userID} date={c.date.slice(0,10)} content={c.content}/>
    );

    handleSubmit = (evt) =>{
        evt.preventDefault(evt);
        if(this.state.comment !== ""){
            services.comment.createPostComment(
            this.props.match.params.id,
            {
                content: this.state.comment,
                userID: this.state.userID
            })
            .then(() => this.setState({commented: true}))
            .catch((err) => this.setState({error: err}));
        }
    }

    handleLike = () => {
        this.setState({liked: true});
        services.like.createPostLike(
            this.props.match.params.id,
            {   
                userID: this.state.userID,
                liked:true
            }
        ).then(() => this.apiCallGetLikes())
        .catch((err) => this.setState({ error: err }));
    }

    handleUnlike = () => {
        services.like.removePostLike(this.state.userID, this.props.match.params.id)
        .then(() => this.apiCallGetLikes())
        .catch((err) => this.setState({ error: err }));
    }

    checkLiked = () => {
        if (this.state.likes.some(l => l.userID === this.state.userID)) {
            return <Button variant="success" onClick={(evt)=>this.handleUnlike(evt)}>Liked</Button>
        }else {
            return <Button variant="primary" onClick={(evt)=>this.handleLike(evt)}>Like</Button>
        }
    }
    

    render(){
        const {user} = this.context;
        return(
        <div className="recipeContainer">
            <div className="mainContainer">
                <img className="mainImg" src = {this.state.post.imgURL}/>
                {user && this.checkLiked()}
                {user && <p>{this.state.likes.length} Like(s) {this.state.comments.length} Comment(s)</p>}
                <div className="commentsContainer">
                    {user && 
                        <Form onSubmit={(evt)=>this.handleSubmit(evt)}>
                            <Form.Group>
                                <Form.Control as="textarea" id="commentContent" onChange={(evt)=>this.setState({comment:evt.target.value})}/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" onClick={()=>this.setState({userID: user._id})}>Comment</Button> 
                        </Form>
                    }
                    {user && 
                        <div className="scrollComments">
                            {this.renderComments()}
                        </div>
                    }
                </div>
            </div>
            <div className="infoContainer">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.description}</p>
                <ul>
                    {this.listOfIngredients()}
                </ul>
                <p>Created on: {(this.state.post.date != undefined) ? this.state.post.date.slice(0,10) : ""}</p>
            </div>
        </div>
        );
    }
}