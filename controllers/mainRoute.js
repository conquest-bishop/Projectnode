const express = require('express');
const router = express.Router()


// login route
router.get('/main', (req, res)=>{
    res.render('main.pug')
})




module.exports = router;