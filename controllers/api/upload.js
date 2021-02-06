const fs = require("fs");
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Drawing, User, Comment } = require('../../models');


const uploadFiles = async (req, res) => {
    try {
        console.log(req.file);


        Drawing.create({
            id: req.body.id,
            user_id: req.body.user_id,
            image: fs.readFileSync(
                __basedir + "../../public/uploads/drawings/" + req.file.filename
            ),
        }).then((drawing) => {
            fs.writeFileSync(
                __basedir + "../../public/uploads/temp/" + drawing.user_id,
                drawing.image
            );

            return res.send(`Sketch has been posted!`);
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when posting sketch!`);
    }
};

module.exports = {
    uploadFiles,
};