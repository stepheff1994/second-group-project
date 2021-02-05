const router = require('express').Router();

const drawingRoutes = require('./drawing-routes.js');

router.use('/drawing', drawingRoutes);
// const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

// router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;