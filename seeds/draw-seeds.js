const { Drawing } = require('../models');

const drawData = [
    {

        image: ('./uploads/drawings/testdrawing1.png'),
        user_id: 1,
    },
    {

        image: ('./uploads/drawings/testdrawing2.png'),
        user_id: 2,
    },
    {

        image: ('./uploads/drawings/testdrawing3.png'),
        user_id: 3,
    }
];

const seedDraws = () => Drawing.bulkCreate(drawData);

module.exports = seedDraws;