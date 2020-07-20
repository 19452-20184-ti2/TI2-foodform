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
                            console.log("User Creating");
                            resolve(
                                new User ({
                                    username: user.username,
                                    password: password,
                                    role: user.role,
                                    dataIv: dataIv
                                }).save()       
                            );
                        } else { 
                            console.log("Invalid Password");
                            reject ('Invalid password!'); }
                    } else { 
                        console.log("Invalid Role");
                        reject("Invalid role."); }
                } else { 
                    console.log("Invalid Username");
                    reject("Username in use.")}
            });
        } catch (error) { reject(error.message); }
    });
};

exports.authenticate = (username, rawPassword) => {
    return new Promise( (resolve, reject) => {
        User.findOne({username: username}, function(err, res){
            if(res){
                const password = cipher.decrypt(res.password, res.dataIv);
                if(password == rawPassword){
                    console.log("Logged In!")
                    resolve({_id: res._id, role: res.role});
                }
                reject("Username and password don't match.")
            } else{ 
                reject("Username does not exist!");
        }
        });    
    });
};

exports.getUser = id => {
    return new Promise ((resolve, reject) => {
        resolve(User.findById(id));
    });
};