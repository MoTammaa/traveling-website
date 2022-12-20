
const searchresultsController = require('../controllers/searchresultsController');
const router = require('express').Router();
const app = require('../app');
const authentication = require('./authentication');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('searchresults');
});

router.post('/', searchresultsController.searchresults);



module.exports = router;