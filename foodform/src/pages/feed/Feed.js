import React from 'react';
import './Feed.css';
import Post from '../../components/post/Post.js';
import PostData from '../../assets/PostData.json';
import DetailedPost from '../../components/detailedPost/DetailedPost.js';
import SearchBar from '../../components/searchbar/SearchBar';

export default class Feed extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showPosts: true,
            idPost: '',
            titleFilter: '',
            ingredientFilter: ''
        }
    }
    render(){
        console.log(this.state.filter)
        if(this.state.showPosts & this.state.titleFilter == ""){
            return(
                    <div className="feedContainer">
                        <SearchBar search={this.search}/>
                        {this.allPosts()}
                    </div>
            ); 
        }else if (this.state.showPosts && this.state.titleFilter.charAt(0) === "@"){
            return(
                <div className="feedContainer">
                    <SearchBar search={this.search}/>
                    {this.filteredPostsByIngredient(this.state.titleFilter)}
                </div>
            );
        }else if (this.state.showPosts){
            return(
                <div className="feedContainer">
                    <SearchBar search={this.search}/>
                    {this.filteredPosts(this.state.titleFilter)}
                </div>
            );
        }else {
            return(
                <div className="feedContainer">
                    {this.selectedPost(this.state.idPost)}
                </div>
            );
        }
            
    }

    /*Funçao que vai iterar pelos objectos json e criar
    componentes post com os seus atributos.
    Para cada objecto "p" cria um componente*/
    allPosts = () => {
        const postComponents = PostData.map(p => (
            <Post
                show = {this.selectPost}
                key = {p._id}
                id = {p._id}
                img = {p.imgURL}
                title = {p.title}
                nLikes = {p.likes}
                nIng = {p.ingredients.length}
            />
        ));
        return postComponents;
    }
    /*Funçao para filtrar o titulo dos posts*/
    filteredPosts = filter => {
        let postComponents = [];
        for(let i = 0; i < PostData.length; i++){
            if(PostData[i].title.toLowerCase().includes(filter)){
                postComponents.push(
                    <Post
                        show = {this.selectPost}
                        key = {PostData[i]._id}
                        id = {PostData[i]._id}
                        img = {PostData[i].imgURL}
                        title = {PostData[i].title}
                        nLikes = {PostData[i].likes}
                        nIng = {PostData[i].ingredients.length}
                    />
                );    
            }
        }
        return postComponents;
    }

    /*Funçao para filtrar um dos igredientes*/
    filteredPostsByIngredient = filter => {
        let ingredient = filter.slice(1);
        let postComponents = [];
        let lower;
        for(let i = 0; i < PostData.length; i++){
            for(let j = 0; j < PostData[i].ingredients.length; j++){
                lower = PostData[i].ingredients[j].toLowerCase();
                if(lower == ingredient){
                    postComponents.push(
                        <Post
                            show = {this.selectPost}
                            key = {PostData[i]._id}
                            id = {PostData[i]._id}
                            img = {PostData[i].imgURL}
                            title = {PostData[i].title}
                            nLikes = {PostData[i].likes}
                            nIng = {PostData[i].ingredients.length}
                        />
                    );    
                }
            }
        }
        return postComponents;
    }

    /*Cria um post detalhado do post escolhido na feed*/
    selectedPost = (id) => {
        for(let i = 0; i < PostData.length; i++){
            if(PostData[i]._id === id){
                return <DetailedPost
                    key = {PostData[i]._id}
                    id = {PostData[i]._id}
                    img = {PostData[i].imgURL} 
                    title = {PostData[i].title}
                    nLikes = {PostData[i].likes}
                    disc = {PostData[i].description}
                    ingredients = {PostData[i].ingredients}
                    comments = {PostData[i].comments}
                    back = {this.returnToFeed}
                />;    
            }
        }
    }

    //deleção de um post em especifico para o modo de visualização detalhado
    selectPost = id => {
        this.setState({
            showPosts: false,
            idPost: id
        });
    }

    //retornar do modo de visualização detalhada do post
    returnToFeed = () => {
        this.setState({
            showPosts: true,
            idPost: 0,
            titleFilter: "",
            ingredientFilter: ""
        });
    }
    //Função activada pelo botão de pesquisa
    search = () => {
        console.log("Searched");
        let filter = document.getElementById("searchFilter").value.toLowerCase();
        console.log(filter);
        this.setState({titleFilter: filter});
    }
}

