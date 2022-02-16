const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login')
        return
    }
    next()
})

/* GET home page. */
router.get('/', (req, res) => {
    console.log(req.session.admin)
    res.render('index', {
        title: 'Express'
    });
});



module.exports = router;