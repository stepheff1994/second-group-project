const router = require('express').Router();
const { Drawing, User, Comment } = require('../models');
// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Drawing.findAll({
        attributes: [
            'id',
            'image',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(drawData => {
            // pass a single post object into the homepage template
            // console.log(drawData[0]);
            const posts = drawData.map(post => post.get({ plain: true }));
            console.log(posts)
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
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
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username'],

            },
            {
                model: Comment,
                attributes: ['id', 'comment'],
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

            // serialize the data
            const post = drawData.get({ plain: true });

            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;