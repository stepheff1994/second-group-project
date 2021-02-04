// import all models
const Draw = require('./Draw');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Draw, {
    foreignKey: 'user_id'
});

Draw.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Draw, {
    foreignKey: 'draw_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Draw.hasMany(Comment, {
    foreignKey: 'draw_id'
});

module.exports = { User, Draw, Comment };
