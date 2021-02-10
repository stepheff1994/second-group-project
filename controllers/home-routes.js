const router = require('express').Router();
const { Drawing, User, Comment } = require('../models');


// router.get('/', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/gallery');
//         return;
//       }
    
//       res.render('login');
// })

// // check if the username and password are right, then redirect and start sessions, else refresh 
// // the same page with errors
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/gallery');
//       return;
//     }
  
//     res.render('login');
//   });

// get all drawings
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/gallery');
      return;
    }
  
    res.render('signup');
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
                res.status(404).json({ message: 'No id' });
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