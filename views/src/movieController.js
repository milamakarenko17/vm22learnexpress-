const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
     res.setEncoding('movies');

});

module.exports = router;