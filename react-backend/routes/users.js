var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "userOne"},
    {id: 2, username: "userTwo"},
    {id: 3, username: "userThree"}
  ]);
});

module.exports = router;
