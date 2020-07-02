import {apiRequest} from"../configs/apiMiddleware"; 

export default { 
    getAllComments: () => apiRequest("GET", `/comments`),
    getPostComments: (id) => apiRequest ("GET",`/posts/${id}/comments`),
    createPostComment:(id,body) => apiRequest ("POST",`/posts/${id}/comments`, body),
    removePostComment:(id,cid) => apiRequest ("DELETE",`/posts/${id}/comments/${cid}`)
};