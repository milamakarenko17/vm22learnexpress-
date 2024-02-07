const express = require('express');
const router = express.Router();
const fs = require ('fs');

router.get('/', (req, res) => {
     fs.appendFileSync('test.txt', 'hello');
     res.send('movies');

});

module.exports = router;