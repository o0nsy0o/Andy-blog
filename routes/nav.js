var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/nav', function(req, res, next) {
  res.render('Nav');
});

module.exports = router;
