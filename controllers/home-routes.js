const router = require('express').Router();
const { Drawing, User, Comment } = require('../models');


// get all drawings
router.get('/', (req, res) => {
    console.log('======================');
    Drawing.findAll({
        order: [['created_at', 'DESC']],
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
        .then(drawData => {
            // pass a single post object into the homepage template
            // console.log(drawData[0]);
            const posts = drawData.map(post => post.get({ plain: true }));
            // console.log(posts)
            res.render('gallery', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// check if the username and password are right, then redirect and start sessions, else refresh 
// the same page with errors
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// find a single drawing by id 
router.get('/drawing/:id', (req, res) => {
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
                res.status(404).json({ message: 'No id' });
                return;
            }

            // serialize the data
            const post = drawData.get({ plain: true });
            console.log(post)
            // pass data to template
            res.render('single-drawing', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// show all drawings by a single user 
router.get('/users/:id', (req, res) => {
    User.findOne({
        //   attributes: { include: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Drawing,
                attributes: ['id', 'image', 'title', 'user_id']
            },
            {
                model: Comment,
                attributes: ['id', 'comment'],
                include: {
                    model: Drawing,
                    attributes: ['id']
                }
            }
        ]

    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }

            // serialize the data
            const users = userData.get({ plain: true });
            console.log(users)
            // pass data to template
            res.render('user-drawings', {
                users,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;