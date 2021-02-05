const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Drawing, User } = require('../../models');
/*
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
                attributes: ['user_id']
            }
        ]
    })
        .then(dbDrawData => res.json(dbDrawData))
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
                attributes: ['user_id']
            }
        ]
    })
        .then(dbDrawData => {
            if (!dbDrawData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbDrawData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Drawing.create({
        id: req.body.id,
        image: req.body.image,
        user_id: req.session.user_id
    })
        .then(dbDrawData => res.json(dbDrawData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Drawing.update(
        {
            image: req.body.image
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbDrawData => {
            if (!dbDrawData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbDrawData);
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
        .then(dbDrawData => {
            if (!dbDrawData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbDrawData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router; */