const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    // email:{
    //     type: String,
    //     require: true
    // },
    role:{
        type:String,
        require:true
    },
    dataIv:{
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);