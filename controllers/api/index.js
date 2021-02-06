const router = require('express').Router();

const drawingRoutes = require('./drawing-routes.js');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/drawing', drawingRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;