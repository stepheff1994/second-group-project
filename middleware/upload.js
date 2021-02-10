const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/public/uploads/drawings");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-drawpost-${file.originalname}`);
    },
});

var uploadFile = multer({ storage: storage });
module.exports = uploadFile;