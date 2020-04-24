module.exports = (sequelize, Sequelize) => {
    
    class Post extends Sequelize.Model {}
        
    Post.init(
        {
            _id:{
                type: sequelize.STRING(36),
                primaryKey: true,
            },
            title:{
                type: sequelize.STRING,
            },
            description:{
                type: sequelize.TEXT,
            },
            author:{
                type: sequelize.STRING,
            },
            ingredients:{
                type: sequelize.STRING,
            },
            date:{
                type: sequelize.DATEONLY,
            },
            imgURL:{
                type: sequelize.STRING,
            },
            likes:{
                type: INTEGER,
            }         
        },
        {sequelize}
    );
    return Post;
}