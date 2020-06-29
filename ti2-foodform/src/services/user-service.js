const mongoose = require('mongoose');
const User = require('../models/User');
const cipher = require('../helpers/cipher');
const roles = require('../helpers/roles');

exports.register = (user) => {
    return new Promise((resolve, reject) =>{
        try{
            User.findOne({username: user.username}, function(err, res){
                if (!res) {
                    if(Object.values(roles).indexOf(user.role)>-1){
                        if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d$@$!%*#?&-.]{8,}$/.test(user.password)){
                            const dataIv = cipher.generateIv();
                            const password = cipher.encrypt(user.password, dataIv);
                            resolve(
                                new User ({
                                    username: user.username,
                                    password: password,
                                    //email: email
                                    role: user.role,
                                    dataIv: dataIv
                                }).save()       
                            );
                        } else { reject ('Invalid password!'); }
                    } else { reject("Invalid role."); }
                } else { reject("Username in use.")}
            });
        } catch (error) { reject(error.message); }
    });
};

exports.authenticate = (username, rawPassword) => {
    return new Promise( (resolve, reject) => {
        User.findOne({username: username}, function(err, res){
            if(res){
                console.log(res.password);
                console.log(res.dataIv);
                const password = cipher.decrypt(res.password, res.dataIv);
                if(password == rawPassword){
                    resolve({_id: res._id,});
                }
                reject("Username and password don't match.")
            } 
        });    
    });
};