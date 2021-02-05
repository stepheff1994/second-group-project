<<<<<<< HEAD
const User = require('./User');
const Drawing = require('./Drawing');
=======
const User = require("./User");
const Drawing = require("./Drawing");
>>>>>>> 34221deae9a36bec9da6f7f794f8024a8b030ce4
const Comment = require('./Comment');

// create associations
User.hasMany(Drawing, {
  foreignKey: "user_id",
});

Drawing.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

Drawing.hasMany(Comment, {
    foreignKey: 'drawing_id'
});

Comment.belongsTo(Drawing, {
    foreignKey: 'drawing_id'
});

module.exports = { Comment , Drawing, User};
