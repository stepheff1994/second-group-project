const { Drawing } = require('../models');

const drawdata = [
    {

        image: ('../public/uploads/drawings/testdrawing1.png'),
        user_id: 3,
    },
    {
<<<<<<< HEAD
        title: 'Morbi non quam nec dui luctus rutrum.',
        drawing: ('../public/uploads/drawings/testdrawing2.png'),
        user_id: 2
=======

        image: ('../public/uploads/drawings/testdrawing2.png'),
        user_id: 8,
>>>>>>> 34221deae9a36bec9da6f7f794f8024a8b030ce4
    },
    {

        image: ('../public/uploads/drawings/testdrawing3.png'),
        user_id: 1,
    }
];

const seedDraws = () => Drawing.bulkCreate(drawdata);

module.exports = seedDraws;