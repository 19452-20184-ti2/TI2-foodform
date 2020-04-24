const Sequelize = require ('sequelize');
const path = require('path');

const sequelize = new Sequelize(
    {
        storage: path.resolve(__dirname,'..','db','orm_sqlite.db'),
        dialect: 'sqlite',
        // logging: false,
    }
);

const connectDB = () => {
    return new Promise ((resolve, reject) => {
        sequelize
            .authenticate() //verifica se a ligação á base de dados é possivel
            .then(() => sequelize.sync()) //se sim sincronizamos a base de dados com os nossos modelos
            .then(() => resolve())
            .catch(err => reject(err));
    });
};

const getDB = () => ({
    posts: require ('../models/post.js') (sequelize, Sequelize) //retornar a base de dados definida naquele path
});

const disconnectDB = () => sequelize.close(); //fechar a ligação

module.exports = {connectDB, getDB, disconnectDB};