const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = mongoose.Schema({
    //id vai ser gerado com UUID
    _id: {
        type:String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    ingredients:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    nLikes:{
        type: Number,
        default: 0
    },
    imgURL:{
        type: String
    },
    userID:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);