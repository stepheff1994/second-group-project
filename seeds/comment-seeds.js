const { Comment } = require('../models');

const commentdata = [
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 8
    },
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 10
    },
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 18
    },
    {
        comment: "Random comment text from user",
        user_id: 7,
        drawing_id: 5
    },
    {
        comment: "Random comment text from user",
        user_id: 1,
        drawing_id: 20
    },
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 7
    },
    {
        comment: "Random comment text from user",
        user_id: 7,
        drawing_id: 4
    },
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 12
    },
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 20
    },
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 14
    },
    {
        comment: "Random comment text from user",
        user_id: 5,
        drawing_id: 4
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 9
    },
    {
        comment: "Random comment text from user",
        user_id: 5,
        drawing_id: 14
    },
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 2
    },
    {
        comment: "Random comment text from user",
        user_id: 8,
        drawing_id: 2
    },
    {
        comment: "Random comment text from user",
        user_id: 2,
        drawing_id: 20
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 11
    },
    {
        comment: "Random comment text from user",
        user_id: 5,
        drawing_id: 13
    },
    {
        comment: "Random comment text from user",
        user_id: 9,
        drawing_id: 16
    },
    {
        comment: "Random comment text from user",
        user_id: 6,
        drawing_id: 4
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 10
    },
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 8
    },
    {
        comment: "Random comment text from user",
        user_id: 8,
        drawing_id: 10
    },
    {
        comment: "Random comment text from user",
        user_id: 1,
        drawing_id: 15
    },
    {
        comment: "Random comment text from user",
        user_id: 5,
        drawing_id: 3
    },
    {
        comment: "Random comment text from user",
        user_id: 1,
        drawing_id: 15
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 16
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 18
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 10
    },
    {
        comment: "Random comment text from user",
        user_id: 7,
        drawing_id: 5
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 3,
        drawing_id: 19
    },
    {
        comment: "Random comment text from user",
        user_id: 5,
        drawing_id: 3
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 14
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 8
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 11
    },
    {
        comment: "Random comment text from user",
        user_id: 8,
        drawing_id: 5
    },
    {
        comment: "Random comment text from user",
        user_id: 8,
        drawing_id: 19
    },
    {
        comment: "Random comment text from user",
        user_id: 9,
        drawing_id: 19
    },
    {
        comment: "Random comment text from user",
        user_id: 5,
        drawing_id: 4
    },
    {
        comment: "Random comment text from user",
        user_id: 2,
        drawing_id: 11
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 6
    },
    {
        comment: "Random comment text from user",
        user_id: 9,
        drawing_id: 6
    },
    {
        comment: "Random comment text from user",
        user_id: 7,
        drawing_id: 9
    },
    {
        comment: "Random comment text from user",
        user_id: 4,
        drawing_id: 19
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 2,
        drawing_id: 19
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 10,
        drawing_id: 12
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;