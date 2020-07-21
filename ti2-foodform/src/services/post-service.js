const mongoose = require('mongoose');
const Post = require('../models/Post');

exports.getPosts = () => {
    return new Promise ((resolve, reject) => {
        resolve(Post.find());
    });
};

exports.getPost = id => {
    return new Promise ((resolve, reject) => {
        resolve(Post.findById(id));
    });
};

exports.getUserPosts = id => {
    return new Promise ((resolve, reject) => {
        resolve(Post.find({userID: id}));
    });
}

exports.addPost = (post) => {
    return new Promise((resolve, reject) =>{
        resolve(new Post({
            title: post.title,
            description: post.description,
            ingredients: post.ingredients,
            imgURL: post.imgURL,
            userID: post.userID
        }));
    });
};

exports.updatePost = (id, post) => {
    return new Promise((resolve, reject) => {
        resolve( Post.updateOne(
            {_id: id},
            {$set: {
                title: post.title,
                description: post.description,
                ingredients: post.ingredients,
                imgURL: post.imgURL,
                userID: post.userID
            }}
        ));
    });
};

exports.deletePost = id => {
    return new Promise((resolve, reject) =>{
        resolve( Post.deleteOne({_id: id}) );
    });
};
