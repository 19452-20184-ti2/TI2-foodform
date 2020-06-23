const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ComentarioSchema = mongoose.Schema({
    //id vai ser gerado com UUID
    userID:{
        type: String,
        require: true
    },
    postID:{
        type:String,
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

module.exports = mongoose.model('Comentario', ComentarioSchema);