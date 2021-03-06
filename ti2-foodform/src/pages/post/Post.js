import React from "react";
import services from"../../services";
import AuthContext from "../../configs/authContext";
import "./Post.css";
import {Button, Form} from "react-bootstrap";
import Comment from "../../components/comment/Comment.js";

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
        this.apiCallGetOnePost(this.props.match.params.id);
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
    
    apiCallGetOnePost = id => services.post.getOnePost(id)
        .then((value) => this.setState({ post: value}))
        .catch((err) => this.setState({ error: err }));
    
    apiCallGetLikes = () =>
            services.like.getPostLikes(this.props.match.params.id)
            .then((value) => this.setState({ likes: value }))
            .catch((err) => this.setState({ error: err }));
        

    apiCallGetComments = () =>
            services.comment.getPostComments(this.props.match.params.id)
            .then((value) => this.setState({ comments: value }))
            .catch((err) => this.setState({ error: err }));
        

    listOfIngredients = () => {
        if(this.state.post.ingredients !== undefined){
            const ingredients = this.state.post.ingredients.trim().split(';');
            const listOfIngredients = ingredients.map( ingredient => {
            
                if(ingredient !=""){
                    return<li>{ingredient.trim()}</li>; 
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
                <div>
                <img className="mainImg" src = {this.state.post.imgURL}/>
                </div>
                <div className="likes">
                        {user && this.checkLiked()}
                        {user && <a> {this.state.likes.length} Like(s) {this.state.comments.length} Comment(s)</a>}
                </div>
                <div className="commentsContainer">
                    <div className="yourComment">{user && 
                        <Form onSubmit={(evt)=>this.handleSubmit(evt)}>
                            <Form.Group>
                                <Form.Control as="textarea" id="commentContent" onChange={(evt)=>this.setState({comment:evt.target.value})}/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" onClick={()=>this.setState({userID: user._id})}>Comment</Button> 
                        </Form>
                    }
                    </div>
                    {user && 
                        <div className="scrollComments">
                            {this.renderComments()}
                        </div>
                    }
                </div>
            </div>
            <div className="infoContainer">
                <h1>{this.state.post.title}</h1>
                <p className="createdData">Created on: {(this.state.post.date != undefined) ? this.state.post.date.slice(0,10) : ""}</p>
                <h3>Ingredientes:</h3>
                <ul>
                    {this.listOfIngredients()}
                </ul>
                <h3>Descrição:</h3>
                <p>{this.state.post.description}</p>
            </div>
        </div>
        );
    }
}