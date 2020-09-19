import React from "react";
import "./User.css";
import services from"../../services";
import AuthContext from "../../configs/authContext";
import OwnedPost from "../../components/ownedPost/OwnedPost";

export default class User extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            myPosts:[],
            user:[]
        }
    }
    static contextType = AuthContext;

    componentDidMount = () => {
        const {user} = this.context;
        this.apiCallGetUser(user._id);
        this.apiCallGetUserPosts(user._id);
    }
    /**
     * Will get the id of the user
     * @param {String} id - id of the user
     */
    apiCallGetUser = id => services.user.getUser(id)
        .then((value) => this.setState({user: value}))
        .catch((err) => this.setState({error: err}))
    /**
     * Will get the id of post based on the id of the user
     * @param {String} id -id of the post
     */
    apiCallGetUserPosts = id =>
        services.post.getUserPosts(id)
        .then((value) => this.setState({myPosts: value}))
        .catch((err) => this.setState({error: err}))
    
    /**
     * Deletes the seleted post and reloads all the other ones
     * @param {String} id - id of the post
     */
    apiCallDeletePost = id => services.post.removePost(id)
        .then( () => this.apiCallGetUserPosts(this.state.user._id))
        .catch(err => this.setState({error:err}))

    /**
     * @returns {post data} - its id, image displayed
     * title, id of the posting user aswell as diferent
     * possible routes for their respective action
     */
    renderMyPosts = () => this.state.myPosts.map(p => {
        return <OwnedPost 
            id={p._id}
            imgURL={p.imgURL}
            title={p.title}
            user={p.userID}
            view={this.redirectToPost}
            edit={this.redirectToPostEdit}
            delete={this.apiCallDeletePost}
        />
    });
    /**
     * once the event gets triggered it will 
     * proceed to redirect the user to its respective route
     * that being the one to see the post.
     * @param {String} id 
     */
    redirectToPost = id => this.props.history.push(`/post/${id}`);

    /**
     * once the event gets triggered it will 
     * proceed to redirect the user to its respective route
     * that being the one to edit the post.
     * @param {String} id 
     */
    redirectToPostEdit = id => this.props.history.push(`/edit/${id}`);

    render(){
        return( 
            <div className="userPageContainer">
                <div className="userInfo">
                    <img className="defaultImg"src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png"/>
                    <center><h1>{this.state.user.username}</h1></center>
                </div>
                <div className="userPosts">
                    {this.renderMyPosts()}
                </div>
            </div>)
        ;
    }
}