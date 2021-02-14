const seedUsers = require('./user-seeds');
const seedDrawing = require('./draw-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedDrawing();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    process.exit(0);
};

seed();