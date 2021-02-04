const User = require("./User");
const Drawing = require("./Drawing");
const Comment = require('./Comment');

//create associations
User.hasMany(Drawing, {
  foreignKey: "user_id",
});

Drawing.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

Comment.belongsTo(Drawing, {
    foreignKey: 'drawing_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Drawing.hasMany(Comment, {
    foreignKey: 'drawing_id'
});

module.exports = { User, Drawing, Comment};
