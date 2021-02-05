const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get comments api/comments
router.get("/", (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a comment
router.post("/", withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment: req.body.comment,
            user_id: req.body.user_id,
            drawing_id: req.body.drawing_id
        }).then(commentData => res.json(commentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    };
});
// delete a comment
router.delete("/:id", withAuth, (req, res) => {
    Comment.destroy({
        where: { id: req.params.id },
    }).then(commentData => {
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.json(commentData)
    }).catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;