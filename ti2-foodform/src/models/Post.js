const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = mongoose.Schema({
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
    imgURL:{
        type: String,
        default: null //<- arranjar uma imagem base
    },
    userID:{
        type: mongoose.Types.ObjectId,
        require: true
    }
});

module.exports = mongoose.model('Post', PostSchema);