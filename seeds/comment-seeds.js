const { Comment } = require('../models');

const commentdata = [
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 2,
        drawing_id: 2
    },
    {
        comment: "Random comment text from user",
        user_id: 1,
        drawing_id: 3
    },
    {
        comment: "Random comment text from user",
        user_id: 1,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 2,
        drawing_id: 2
    },
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 3
    }

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;