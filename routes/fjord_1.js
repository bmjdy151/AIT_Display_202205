var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fjord_1', { title: 'Fjord1' });
});

module.exports = router;