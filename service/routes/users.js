var express = require('express');
var router 	= express.Router();
var User 	= require('../models/users');
var Event 	= require('../models/events');
var Wifi 	= require('../models/wifis');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register/:deviceId/:name', function(req, res, next) {
	var user_name = req.params.name;
	var user_device_id = req.params.deviceId
	User.register(user_name, user_device_id, function(err, user) {
		if (err == null) 
			res.send('用户 ' + user_name + ' 已经注册成功！');
		else 
			res.send('用户 ' + user_name + ' 注册失败！');
	});
	
})

router.get('/:deviceId/come/:ssid', function(req, res, next) {
	var user_device_id = req.params.deviceId
	var ssid = req.params.ssid;
	Event.log(user_device_id, ssid, 1, function(err, event) {
		if (err == null) {res.send(user_device_id + ' 来了 ' + ssid);}
	});
	
})

router.get('/:deviceId/leave/:ssid', function(req, res, next) {
	var user_device_id = req.params.deviceId
	var ssid = req.params.ssid;
	Event.log(user_device_id, ssid, 0, function(err, event) {
		if (err == null) res.send(user_device_id + ' 离开 ' + ssid);
	});	
})

router.get('/:deviceId/at/:ssid', function(req, res, next) {
	var user_device_id = req.params.deviceId
	var ssid = req.params.ssid;
	Event.findLastRecord(user_device_id, ssid, function(err, event) {
		if (event == null) {
			res.send('用户' + user_device_id + ' 的记录不存在');
		} else {
			var isAt = event.event;
			var isAtString = isAt ? ' 在 ' : ' 不在 ';
			res.send(user_device_id + isAtString + ssid);
			//res.render('result', {'isAt': isAt});
		}
	});
})

module.exports = router;
