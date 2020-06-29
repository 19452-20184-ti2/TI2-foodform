const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = mongoose.Schema({
    //id vai ser gerado com UUID
    userID:{
        type: mongoose.Types.ObjectId,
        require: true
    },
    postID:{
        type: mongoose.Types.ObjectId,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    date: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Comment', CommentSchema);