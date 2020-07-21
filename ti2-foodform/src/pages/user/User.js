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

    apiCallGetUser = id => services.user.getUser(id)
        .then((value) => this.setState({user: value}))
        .catch((err) => this.setState({error: err}))

    apiCallGetUserPosts = id =>
        services.post.getUserPosts(id)
        .then((value) => this.setState({myPosts: value}))
        .catch((err) => this.setState({error: err}))
    

    apiCallDeletePost = id => services.post.removePost(id)
        .then( () => this.apiCallGetUserPosts(this.state.user._id))
        .catch(err => this.setState({error:err}))

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

    redirectToPost = id => this.props.history.push(`/post/${id}`);

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