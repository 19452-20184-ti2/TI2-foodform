import {apiRequest} from"../configs/apiMiddleware"; 

export default { 
    getAllLikes:()=>apiRequest("GET",`/likes`),
    getPostLikes:(id)=>apiRequest("GET",`/posts/${id}/likes`),
    createPostLike:(id,body)=>apiRequest("POST",`/posts/${id}/like`, body),
    updatePostLike:(uid,id,body)=>apiRequest("PUT",`/posts/${id}/like/${uid}`, body),
    removePostLike:(uid,id)=>apiRequest("DELETE",`/posts/${id}/like/${uid}`)
};