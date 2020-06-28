const mongoose = require('mongoose');
const User = require('../models/User');
const cipher = require('../helpers/cipher');

exports.register = (user) => { //previous parameters were (username, password)
    return new Promise((resolve, reject) =>{
        try{
            const u = User.findOne({username: user.username});
            if (u == null) {
                if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d$@$!%*#?&-.]{8,}$/.test(user.rawPassword)){
                    const dataIv = cipher.generateIv();
                    const password = cipher.encrypt(user.rawPassword, dataIv);
                    resolve(
                        new User ({
                            username: user.username,
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