const express = require('express');
const router = express.Router();

router.get('/register', async (req, res) => {
    res.render('/auth/register.njk');
  });

  module.exports = router;