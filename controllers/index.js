const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const myCanvasRoutes = require('./my-canvas-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/my-canvas', myCanvasRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
