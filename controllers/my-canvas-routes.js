const router = require('express').Router();
const sequelize = require('../config/connection');
const { Drawing, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all drawings
router.get('/', withAuth, (req, res) => {
  console.log('======================');
  Drawing.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'image',
      'title',
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
      res.render('my-canvas', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// edit title in my canvas
router.get('/edit/:id', withAuth, (req, res) => {
  Drawing.findByPk(req.params.id, {
    attributes: [
      'id',
      'image',
      'title',
      'user_id'
      // 'created_at'
    ],
    include: [
      /* {
        model: Comment,
        attributes: ['id', 'comment', 'drawing_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }, */
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbDrawData => {
      if (dbDrawData) {
        const post = dbDrawData.get({ plain: true });

        res.render('edit-title', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/create', withAuth, (req, res) => {
  res.render('create-drawing',{
    loggedIn: true
  });
});


module.exports = router;
