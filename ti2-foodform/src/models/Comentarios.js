const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ComentariosSchema = mongoose.Schema({
    //id vai ser gerado com UUID
    _id:{
        type: String,
        require: true
    },
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

module.exports = mongoose.model('Comentarios', ComentariosSchema);