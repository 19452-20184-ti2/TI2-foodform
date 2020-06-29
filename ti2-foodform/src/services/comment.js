import {apiRequest} from"../configs/apiMiddleware"; 

export default{ 
    getAllComments:()=>apiRequest("GET",`/comments`),
    getPostComments:(id)=>apiRequest("GET",`/posts/${id}/comments`),
    createPostComment:(body)=>apiRequest("POST",`/posts/${id}/comments`, body),
    removePostComment:(cid)=>apiRequest("DELETE",`/posts/${id}/comments/${cid}`)
};