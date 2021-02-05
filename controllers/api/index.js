const router = require('express').Router();

const drawingRoutes = require('./drawing-routes.js');

router.use('/drawing', drawingRoutes);

module.exports = router;