const router = require('express').Router();
const sequelize = require('../config/connection');
const { Drawing, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for my-canvas
router.get('/', (req, res) => {
  console.log(req.session);
  console.log('======================');
  Drawing.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'image',
      'title'
      // 'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment', 'drawing_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(DrawData => {
      const allDrawings = DrawData.map(post => post.get({ plain: true }));
      res.render('my-canvas', { allDrawings, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Drawing.findByPk(req.params.id, {
    attributes: [
      'id',
      'image',
      'title',
      'user_id',
      // 'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment', 'drawing_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
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

module.exports = router;
