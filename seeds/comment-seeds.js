const { Comment } = require('../models');

const commentdata = [
    {
        comment: "Random comment text from user",
        drawing_id: 1
        // user_id: 6,
        // post_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 2,
        drawing_id: 2
        // post_id: 8
    },
    {
        comment: "Random comment text from user",
        drawing_id: 3
        // post_id: 10
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;