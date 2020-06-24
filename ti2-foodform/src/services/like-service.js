const mongoose = require('mongoose');
const Like = require('../models/Like');

/**
 * Gets all likes given, for testing porposes.
 */
exports.getAllLikes = () => {
    return new Promise((resolve, reject) =>{
        resolve(
            Like.find()
        )
    });
};

/**
 * Gets all the likes associated with this post.
 * @param {*} id 
 */
exports.getPostLikes = id => {
    return new Promise((resolve, reject) =>{
        resolve(
            Like.find({postID:id})
        )
    });
};

exports.like = (id, like) => {
    return new Promise((resolve, reject) => {
        resolve(
            new Like({
                liked: like.liked,
                userID: like.userID,
                postID: id
            })
        )
    });
};

exports.updateLikedCondition = (id, uid, like) => {
    return new Promise((resolve, reject) => {
        resolve(
            Like.updateOne(
                {
                    userID:uid,
                    postID:id
                },
                {
                    $set:{
                        postID: id,
                        liked: like.liked,
                        userID: like.userID
                }}
            )
        )
    });
};

exports.deleteLikedCondition = (id, uid) =>{
    return new Promise((resolve, reject) =>{
        resolve(Like.deleteOne({userID:uid, postID:id}))
    });
}