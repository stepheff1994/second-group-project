const router = require('express').Router();
const sequelize = require('../config/connection');
const { Drawing, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
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
            'created_at'
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
            const allDrawings = dbDrawData.map(post => post.get({ plain: true }));
            res.render('dashboard', { allDrawings, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/* router.get('/edit/:id', withAuth, (req, res) => {
  Drawing.findByPk(req.params.id, {
    attributes: [
      'id',
      'image',
      'user_id',
      'created_at'
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
        
        res.render('edit-drawing', {
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
}); */

module.exports = router;
