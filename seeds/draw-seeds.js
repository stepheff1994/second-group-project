const { Drawing } = require('../models');

const drawdata = [
    {

        image: ('../public/uploads/drawings/testdrawing1.png'),
        user_id: 1,
    },
    {

        image: ('../public/uploads/drawings/testdrawing2.png'),
        user_id: 2,
    },
    {

        image: ('../public/uploads/drawings/testdrawing3.png'),
        user_id: 3,
    }
];

const seedDraws = () => Drawing.bulkCreate(drawdata);

module.exports = seedDraws;