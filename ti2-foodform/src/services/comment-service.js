const mongoose = require('mongoose');
const Comment = require('../models/Comment');

exports.getAllComments = () => {
    return new Promise((resolve, reject) =>{
        resolve(
            Comment.find()
        )
    });
};

exports.getPostComments = id => {
    return new Promise((resolve, reject) =>{
        resolve(
            Comment.find({postID:id})
        )
    });
};

exports.addComment = (id, comment) => {
    return new Promise((resolve, reject) => {
        resolve(
            new Comment({
                postID: id,
                content: comment.content,
                userID: comment.userID
            })
        )
    });
};

exports.deleteComment = id => {
    return new Promise((resolve, reject) => {
        resolve(
            Comment.deleteOne({_id:id}) 
        )
    });
};