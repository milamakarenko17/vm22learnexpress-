const express = require('express');
const router = express.Router();

const User = require('/models/User.js');

router.get('/register', async (req, res) => {
    res.render('/auth/register.njk');
  });

  router.get('/register', async (req, res) => {
    let user = await User.findOne({
       where: {
        email: req.body.email
       }
    });
    if(req.body.password !== req.body.password_confirm || user){
    } else {
        User.create ({
            name: req.body.name,
            email: req.body.email,
            pasword: req.body.password,
        })
    }
    res.redirect('/register');
  });

  module.exports = router;