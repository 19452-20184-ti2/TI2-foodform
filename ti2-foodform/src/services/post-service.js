const posts = require('./test-post.json')//<--- vamos ter de ir buscar a base de dados

exports.getPosts = () => {
    return new Promise ((resolve, reject) => {
        resolve(posts);
    });
};

exports.getPost = id => {
    return new Promise ((resolve, reject) => {
        resolve(posts.find(post => post._id === id));
    });
};

exports.addPost = (post) => {
    return new Promise((resolve, reject) =>{
        resolve({inserted:1});
    });
};

exports.updatePost = (id, post) => {
    return new Promise((resolve, reject) => {
        resolve({update:1});
    });
};

exports.deletePost = id => {
    return new Promise((resolve, reject) =>{
        resolve({deleted:1});
    });
};
