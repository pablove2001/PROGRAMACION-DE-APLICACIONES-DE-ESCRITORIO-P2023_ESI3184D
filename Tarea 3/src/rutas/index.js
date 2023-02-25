const router = require('express').Router();
const rutasAbout = require('./about');
const rutasPortfolio = require('./portfolio');
const rutasContact = require('./contact');
const { auth } = require('./../middlewares')

// router.use('', auth);
router.use('/about', auth, rutasAbout);
router.use('/portfolio', auth, rutasPortfolio);
router.use('/contact', auth, rutasContact);


module.exports = router;