const router = require('express').Router();

const drawRoutes = require('./draw-routes.js');

router.use('/draw', drawRoutes);

module.exports = router;