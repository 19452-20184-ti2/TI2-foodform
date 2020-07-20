import React from "react";
import ReceitaPost from "../../components/receitaPost/ReceitaPost.js"
import "./Home.css";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton} from "react-bootstrap";
import services from"../../services";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
            posts:[],
            searchType: "",
            error: undefined
        }
    }

    componentDidMount = () => this.getPosts();
    
    getPosts = () => services.post.getAllPosts()
        .then((value) => this.setState({ posts: value}))
        .catch((err) => this.setState({ error: err }));
    
    renderAllPosts = () =>
        this.state.posts.map( post => {
            let ing = post.ingredients.trim().split(';');
            return <ReceitaPost
                show = {this.showSinglePost}
                key = {post._id}
                id = {post._id}
                imgURL = {post.imgURL}
                title = {post.title}
                ingredients = {ing.length-1}
            />
        });

    showPostsByTitle = () => {
        this.setState({
            search: document.getElementById("searchParameter").value,
            searchType: "title"
        });
    }

    showPostsByIngredient = () => {
        this.setState({
            search: document.getElementById("searchParameter").value,
            searchType: "ingredient"
        });
    }

    renderPostsBySearch = filter => {
        let receitas = [];
        switch (this.state.searchType) {
            case "title":
                receitas = this.state.posts.map( post => {
                    let aux1 = post.title.toLowerCase();
                    let aux2 = filter.toLowerCase();
                    if(aux1.includes(aux2)){
                        let ing = post.ingredients.trim().split(';');
                        return <ReceitaPost
                            show = {this.showSinglePost}
                            key = {post._id}
                            id = {post._id}
                            imgURL = {post.imgURL}
                            title = {post.title}
                            ingredients = {ing.length-1}
                        />
                    }
                });
                break;
            case "ingredient":
                receitas = this.state.posts.map(post =>{
                    let ing = post.ingredients.trim().toLowerCase().split(';');
                    let aux = filter.toLowerCase();
                    if(ing.includes(aux)){
                        return <ReceitaPost
                            show = {this.showSinglePost}
                            key = {post._id}
                            id = {post._id}
                            imgURL = {post.imgURL}
                            title = {post.title}
                            ingredients = {ing.length-1}
                        />;
                    }
                });
                break; 
        }
        return receitas;
    }

    render(){
        if(this.state.search === "" & this.state.error === undefined){
            return(
                <div className="homeContainer">
                    <div className="searchBar">
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Search Recepies" id="searchParameter"/>
                            <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="Search">
                                <Dropdown.Item onClick={this.showPostsByTitle}>Recipe</Dropdown.Item>
                                <Dropdown.Item onClick={this.showPostsByIngredient}>Ingredient</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </div>
                    <div className="feedContainer">
                        {this.renderAllPosts()}
                    </div>
                </div>
            );
        }else if(this.state.search !== "" & this.state.error === undefined){
            return(
                <div className="homeContainer">
                    <div className="searchBar">
                    <InputGroup className="mb-3">
                            <FormControl placeholder="Search Recepies" id="searchParameter"/>
                            <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="Search">
                                <Dropdown.Item onClick={this.showPostsByTitle}>Recipe</Dropdown.Item>
                                <Dropdown.Item onClick={this.showPostsByIngredient}>Ingredient</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </div>
                    <div className="feedContainer">
                        {this.renderPostsBySearch(this.state.search)}
                    </div>
                </div>
                
            );
        }
        
    }
}