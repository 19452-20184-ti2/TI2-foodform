const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = mongoose.Schema({
    //id vai ser gerado com UUID
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    ingredients:{
        type: String,
        default:null
    },
    date: {
        type: Date,
        default: Date.now
    },
    imgURL:{
        type: String,
        default: null //<- arranjar uma imagem base
    },
    user:{
        type: String, //<-Object id no futuro
        require: true
    }
});

module.exports = mongoose.model('Post', PostSchema);