const jwt = require('jsonwebtoken');
const key = process.env.JWT_KEY;

exports.createToken = (payload) => {
    return new Promise((resolve, reject) => {
        const options = {expiresIn: '8h', issuer:'ti2-foodform'};
        jwt.sign(payload, key, options, (error, token) =>{
            if (error) {
                reject(error);
            } else {
                resolve({token, ...payload});
            } 
        });
    });
};

exports.validateToken = (token) => {
    return new Promise( (resolve, reject) => {
        let = {issuer: ti2-foodform};
        jwt.verify(token, key, options, (error, token)=>{
            if(error){
                reject(error);
            } else {
                resolve(playload);
            }
        });
    });
};