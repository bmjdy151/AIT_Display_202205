var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fjord_3', { title: 'fjord3' });
});

module.exports = router;