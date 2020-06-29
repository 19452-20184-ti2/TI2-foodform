const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LikeSchema = mongoose.Schema({
    userID:{
        type: mongoose.Types.ObjectId,
        require: true
    },
    postID:{
        type: mongoose.Types.ObjectId,
        require:true
    },
    liked:{ 
        type: Boolean,
        default: null
    }
});

module.exports = mongoose.model('Like', LikeSchema);