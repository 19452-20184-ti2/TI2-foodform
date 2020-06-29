import {apiRequest} from"../configs/apiMiddleware"; 

export default{ 
    getAllLikes:()=>apiRequest("GET",`/likes`),
    getPostLikes:(id)=>apiRequest("GET",`/posts/${id}/likes`),
    createPostLike:(body)=>apiRequest("POST",`/posts/${id}/like`, body),
    updatePostLike:(id,body)=>apiRequest("PUT",`/posts/${id}/like/${uid}`, body),
    removePostLike:(id)=>apiRequest("DELETE",`/posts/${id}/like/${uid}`)
};