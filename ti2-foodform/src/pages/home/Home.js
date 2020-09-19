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
    
    /**
     * Will request to the API all posts
     */
    getPosts = () => services.post.getAllPosts()
        .then((value) => this.setState({ posts: value}))
        .catch((err) => this.setState({ error: err }));
    
    /**
     * for each post it will
     * check how many ingredients the recipe has
     * based on the ammount of ";"
     * @returns {post data} all the information
     * to be displayed
     */
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
    /**
     * will set the "searchType" as "title"
     * and "searchParameter" as the value inputed
     * by the user to later be user in "renderPostsBySearch"
     */
    showPostsByTitle = () => {
        this.setState({
            search: document.getElementById("searchParameter").value,
            searchType: "title"
        });
    }
    /**
     * will set the "searchType" as "ingredient"
     * and "searchParameter" as the value inputed
     * by the user to later be user in "renderPostsBySearch"
     */
    showPostsByIngredient = () => {
        this.setState({
            search: document.getElementById("searchParameter").value,
            searchType: "ingredient"
        });
    }

    /**
     * depending on the type of search it will return
     * all the post data needed.
     * @param {String} filter - will be used to check if any title
     * or any ingredient (this depending on the search method used)
     * includes the search term being used.
     */
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
                    ing = ing.map(p => p.trim());
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

    render(){ console.log(this.state.posts)
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