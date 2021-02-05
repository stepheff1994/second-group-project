const { Comment } = require('../models');

const commentdata = [
    {
        comment: "Random comment text from user",
<<<<<<< HEAD
        drawing_id: 1
        // user_id: 6,
        // post_id: 1
    },
    {
        comment: "Random comment text from user",
        drawing_id: 2
        // post_id: 8
    },
    {
        comment: "Random comment text from user",
        drawing_id: 3
        // post_id: 10
    }
=======
        user_id: 3,
        drawing_id: 1
    },
    {
        comment: "Random comment text from user",
        user_id: 8,
        drawing_id: 2
    },
    {
        comment: "Random comment text from user",
        user_id: 1,
        drawing_id: 3
    },
    
>>>>>>> 34221deae9a36bec9da6f7f794f8024a8b030ce4
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;