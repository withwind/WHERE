var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Event = require('../models/events');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:deviceId/come', function(req, res, next) {
  user = User.getUser(req.params.deviceId);
  Event.log(req.params.deviceId, 1);
  res.send('user ' + req.params.deviceId + ' come');
});

router.get('/register/:name/:deviceId', function(req, res, next) {
  console.log(req.params.name + ',' + req.params.deviceId)
  User.register(req.params.name, req.params.deviceId);
  res.send('user ' + req.params.name + ' has been registered!');
});


module.exports = router;
