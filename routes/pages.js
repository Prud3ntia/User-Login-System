const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
});

router.get('/register.hbs', (req, res) => {
    res.render('register.hbs');
});

router.get('/login.hbs', (req, res) => {
    res.render('login.hbs');
});

router.get('/profile.hbs', (req, res) => {
    res.render('profile.hbs');
});


module.exports = router;