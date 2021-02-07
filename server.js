const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  // with rolling to true expiration is reset to the original maxAge
  rolling: true,
  // maxage set for session to expire thus requiring user to log in again (currently set to 10 minutes)
  cookie: { maxAge: 600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.use('/uploads', express.static(path.join(__dirname, '/public/uploads/drawings')));
// use multer to upload the filepath to server
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

app.post('/upload', upload.single('image'), (req, res, next) => {
  try {
    return res.status(201).json({
      message: 'File uploaded successfully'
    });
  } catch (error) {
    console.error(error);
  }
});


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});