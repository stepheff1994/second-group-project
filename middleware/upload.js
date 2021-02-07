const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/public/uploads/drawings");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-drawpost-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

var uploadFile = multer({ storage: storage, fileFilter: fileFilter });
module.exports = uploadFile;
