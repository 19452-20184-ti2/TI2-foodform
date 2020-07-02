import {apiRequest} from"../configs/apiMiddleware"; 

export default { 
    getAllPosts:()=>apiRequest("GET",`/posts`),
    getOnePost:(id)=>apiRequest("GET",`/posts/${id}`),
    createPost:(body)=>apiRequest("POST",`/posts/upload`, body),
    updatePost:(id,body)=>apiRequest("PUT",`/posts/${id}`, body),
    removePost:(id)=>apiRequest("DELETE",`/posts/${id}`)
};