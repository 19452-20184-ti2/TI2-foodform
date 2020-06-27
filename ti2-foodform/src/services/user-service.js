const mongoose = require('mongoose');
const User = require('../models/User');
const cipher = require('../helpers/cipher');

exports.register = (username, rawPassword) => {
    return new Promise((resolve, reject) =>{
        try{
            const u = User.findOne({username: username});
            if (u == null) {
                if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d$@$!%*#?&-.]{8,}$/.test(rawPassword)){
                    const dataIv = cipher.generateIv();
                    const password = cipher.encrypt(rawPassword, dataIv);
                    resolve(
                        new User ({
                            username: username,
                            password: password,
                            //email: email
                            //role: role
                            dataIv: dataIv
                        })                    
                    )
                } else { reject ('Invalid password!'); }
            } else { reject ('That username has already been used.'); }
        } catch (error) { reject(error.message); }
    });
};

exports.authenticate = (username, rawPassword) => {
    return new Promise((resolve, reject)=>{
        let user = User.findOne({username: username});
        if(user != null){
            user = json(user); //just to be sure it is json :D
            const password = cipher.decrypt(user.password, user.dataIv);
            if(password == rawPassword){
                resolve({_id: user.id});
            }
        } else { reject ('That username has already been used.'); }
    });
};