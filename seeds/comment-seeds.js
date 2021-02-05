const { Comment } = require('../models');

const commentdata = [
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 1
    },
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 8
    },
    {
        comment: "Random comment text from user",
        // user_id: 3,
        // post_id: 10
    },
    {
        comment: "Random comment text from user",
        // user_id: 3,
        // post_id: 18
    },
    {
        comment: "Random comment text from user",
        // user_id: 7,
        // post_id: 5
    },
    {
        comment: "Random comment text from user",
        // user_id: 1,
        // post_id: 20
    },
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 7
    },
    {
        comment: "Random comment text from user",
        // user_id: 7,
        // post_id: 4
    },
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 12
    },
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 20
    },
    {
        comment: "Random comment text from user",
        // user_id: 3,
        // post_id: 14
    },
    {
        comment: "Random comment text from user",
        // user_id: 5,
        // post_id: 4
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 9
    },
    {
        comment: "Random comment text from user",
        // user_id: 5,
        // post_id: 14
    },
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 2
    },
    {
        comment: "Random comment text from user",
        // user_id: 8,
        // post_id: 2
    },
    {
        comment: "Random comment text from user",
        // user_id: 2,
        // post_id: 20
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 11
    },
    {
        comment: "Random comment text from user",
        // user_id: 5,
        // post_id: 13
    },
    {
        comment: "Random comment text from user",
        // user_id: 9,
        // post_id: 16
    },
    {
        comment: "Random comment text from user",
        // user_id: 6,
        // post_id: 4
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 10
    },
    {
        comment: "Random comment text from user",
        // user_id: 3,
        // post_id: 8
    },
    {
        comment: "Random comment text from user",
        // user_id: 8,
        // post_id: 10
    },
    {
        comment: "Random comment text from user",
        // user_id: 1,
        // post_id: 15
    },
    {
        comment: "Random comment text from user",
        // user_id: 5,
        // post_id: 3
    },
    {
        comment: "Random comment text from user",
        // user_id: 1,
        // post_id: 15
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 16
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 18
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 10
    },
    {
        comment: "Random comment text from user",
        // user_id: 7,
        // post_id: 5
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 1
    },
    {
        comment: "Random comment text from user",
        // user_id: 3,
        // post_id: 19
    },
    {
        comment: "Random comment text from user",
        // user_id: 5,
        // post_id: 3
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 14
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 8
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 11
    },
    {
        comment: "Random comment text from user",
        // user_id: 8,
        // post_id: 5
    },
    {
        comment: "Random comment text from user",
        // user_id: 8,
        // post_id: 19
    },
    {
        comment: "Random comment text from user",
        // user_id: 9,
        // post_id: 19
    },
    {
        comment: "Random comment text from user",
        // user_id: 5,
        // post_id: 4
    },
    {
        comment: "Random comment text from user",
        // user_id: 2,
        // post_id: 11
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 6
    },
    {
        comment: "Random comment text from user",
        // user_id: 9,
        // post_id: 6
    },
    {
        comment: "Random comment text from user",
        // user_id: 7,
        // post_id: 9
    },
    {
        comment: "Random comment text from user",
        // user_id: 4,
        // post_id: 19
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 1
    },
    {
        comment: "Random comment text from user",
        // user_id: 2,
        // post_id: 19
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 1
    },
    {
        comment: "Random comment text from user",
        // user_id: 10,
        // post_id: 12
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;