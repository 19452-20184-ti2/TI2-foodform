//importa a base de dados da maneira como foi definida no ficheiro config/sequelize.js
const db = require ('../configs/sequelize.js').getDB(); 
const uuid = require //unique id

exports.getPosts = () => {
    return new Promise ((resolve, reject)=>{
        db.posts
            .findAll({attributes: ['_id','title','likes','imgURL'] })
            .then(posts => resolve(posts))
            .catch(err => reject(err));
    });
}; 

exports.getPost = id => {
    return new Promise ((resolve, reject)=>{
        db.posts
            // findByPk - find by private key
            .findByPK(id)
            .then(posts => resolve(posts))
            .catch(err => reject(err));
    });
}; 

exports.insertPost = body => {
    return new Promise ((resolve, reject)=>{
        db.posts
            .create({_id:uuid(), ...body})
            .then(user => resolve({inserted:1, _id: user._id}))
            .catch(err => reject(err));
    });
}; 

exports.updatePost = (id, body) => {
    return new Promise ((resolve, reject)=>{
        db.posts
            .update(body, {
                fields: ['title', 'description', 'imgURL', 'ingredients'],
                where: {_id: id}
            })
            .then(user => resolve({updated: 1}))
            .catch(err => reject(err));
    });
};

exports.removePost = (id) => {
    return new Promise ((resolve, reject)=>{
        db.posts
            .destroy({where: {_id: id}})
            .then(user => resolve({removed: 1}))
            .catch(err => reject(err));
    });
};