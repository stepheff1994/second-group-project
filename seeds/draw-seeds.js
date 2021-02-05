const { Draw } = require('../models');

const drawdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        drawing: ('../public/uploads/drawings/testdrawing1.png'),
        user_id: 3
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        drawing: ('../public/uploads/drawings/testdrawing2.png'),
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        drawing: ('../public/uploads/drawings/testdrawing3.png'),
        user_id: 1
    }
];

const seedDraws = () => Draw.bulkCreate(drawdata);

module.exports = seedDraws;