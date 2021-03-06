const router = require('express').Router();
const { Drawing, User, Comment } = require('../../models');
// get all drawings
router.get('/', (req, res) => {
    console.log('======================');
    Drawing.findAll({
        order: [
            ['created_at', 'DESC']
        ],
        attributes: [
            'id',
            'image',
            'title',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(drawData => res.json(drawData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/:id', (req, res) => {
    Drawing.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'image',
            'title',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username'],

            },
            {
                model: Comment,
                attributes: ['id', 'comment', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(drawData => {
            if (!drawData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(drawData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.post('/', (req, res) => {
    Drawing.create({
        image: req.body.image,
        title: req.body.title,
        user_id: req.session.user_id
    })
        .then(drawData => res.json(drawData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Drawing.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(drawData => {
            if (!drawData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(drawData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Drawing.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(drawData => {
            if (!drawData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(drawData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;