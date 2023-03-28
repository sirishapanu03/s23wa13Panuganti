var express = require('express');
var router = express.Router();

/* GET my data by Sirisha Panuganti. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sirisha Panuganti' });
});

module.exports = router;
