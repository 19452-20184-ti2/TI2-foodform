const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LikesSchema = mongoose.Schema({
    userID:{
        type: String,
        require: true
    },
    postID:{
        type: String,
        require:true
    },
    liked:{ 
        type: Boolean,
        default: null
    }
});

module.exports = mongoose.model('Likes', LikesSchema);