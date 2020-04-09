const posts = require("./PostData.json");

exports.getPosts = () =>{
    return new Promise( (resolve,reject) => {
        resolve(posts);
    });
} 


exports.getPost = id =>{
    return new Promise( (resolve, reject) => {
        //find() retorna o primeiro valor correspondente á condição
        resolve (posts.find(post => post._id === id));
    });
}

exports.insertPost = body => {
    return new Promise( (resolve, reject) => {
        resolve({inserted:1});
    });
}

exports.updatePost = (id, body) => {
    return new Promise( (resolve, reject) => {
        resolve({updated:1});
    });
}

exports.removePost = id => {
    return new Promise((resolve, reject) =>{
        resolve({deleted: 1});
    });
}